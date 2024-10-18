import { BackButton } from '@/components/template/UI/BackButton';
import { Message } from '@/components/template/UI/Message';
import { CityItem, useCities } from '@/core/context/CitiesContext';
import { convertToEmoji } from '@/core/utilities/convert-to-emoji';
import { useUrlPosition } from '@/hooks';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

const BASE_URL = 'https://api.bigdatacloud.net/data/reverse-geocode-client';

function Form() {
  const [lat, lng] = useUrlPosition();
  const { createCity, loading } = useCities();
  const navigate = useNavigate();

  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState('');
  const [date, setDate] = useState<Date | null>(new Date());
  const [notes, setNotes] = useState('');
  const [emoji, setEmoji] = useState<string>('');
  const [geoCodingError, setGeoCodingError] = useState<string>('');

  useEffect(
    function () {
      if (!lat && !lng) return;

      async function fetchCityData() {
        try {
          setIsLoadingGeocoding(true);
          setGeoCodingError('');
          const response = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`,
          );
          const data = await response.json();

          if (!data.countryCode)
            throw new Error(
              "That doesn't seem to be a city. Click somwhere else on map 🗺️",
            );

          setCityName(data.city || data.localoty || '');
          setCountry(data.countryName);
          setEmoji(convertToEmoji(data.countryCode));
          //
        } catch (err) {
          console.log(err instanceof Error);
          if (err instanceof Error) setGeoCodingError(err.message);
        } finally {
          setIsLoadingGeocoding(false);
          //
        }
      }
      fetchCityData();
    },
    [lat, lng],
  );

  if (isLoadingGeocoding) return <p>Loading...</p>;
  if (!lat && !lng)
    return <Message message='Start by clicking somewhere on the map. 🗺️' />;
  if (geoCodingError) return <Message message={geoCodingError} />;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!cityName || !date) return;

    const newCity: CityItem = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: { lat, lng },
    };

    await createCity(newCity);
    navigate('/app/cities');
  }

  function handleChangeDate(date: Date | null) {
    setDate(date);
  }

  return (
    <form
      className={`bg-base-100 rounded-lg py-8 px-12 w-full flex flex-col gap-4 shadow-lg ${
        loading ? 'opacity-30' : ''
      }`}
      onSubmit={handleSubmit}
    >
      <label className='form-control w-full'>
        <div className='label'>
          <span className='label-text'>City name</span>
        </div>
        <span className='relative'>
          <input
            type='text'
            // placeholder='Type here'
            className='input input-bordered w-full'
            onChange={e => setCityName(e.target.value)}
            value={cityName}
          />
          <span className='absolute right-4 top-0.5 text-4xl'>{emoji}</span>
        </span>
      </label>

      <label className='form-control w-full'>
        <div className='label'>
          <span className='label-text'>When did you go to {cityName}?</span>
        </div>
        <DatePicker
          id='date'
          className='input input-bordered w-full'
          onChange={handleChangeDate}
          selected={date}
          dateFormat='dd/MM/yyy'
        />
      </label>

      <label className='form-control w-full'>
        <div className='label'>
          <span className='label-text'>
            Notes about your trip to {cityName}
          </span>
        </div>

        <textarea
          className='textarea textarea-bordered'
          onChange={e => setNotes(e.target.value)}
          id='notes'
          value={notes}
        ></textarea>
      </label>

      <div className='flex justify-between items-center'>
        <button
          disabled={loading}
          className={`btn btn-primary px-8 ${
            loading ? 'btn-disabled cursor-not-allowed' : ''
          }`}
        >
          Add
        </button>
        <BackButton />
      </div>
    </form>
  );
}

export { Form };
