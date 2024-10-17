import { BackButton } from '@/components/template/UI/BackButton';
import { Message } from '@/components/template/UI/Message';
import { convertToEmoji } from '@/core/utilities/convert-to-emoji';
import { useUrlPosition } from '@/hooks';
import { useEffect, useState } from 'react';

const BASE_URL = 'https://api.bigdatacloud.net/data/reverse-geocode-client';

function Form() {
  const [lat, lng] = useUrlPosition();

  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [cityName, setCityName] = useState('');
  const [, setCountry] = useState('');
  const [date, setDate] = useState<Date | string>(new Date());
  const [notes, setNotes] = useState('');
  const [emoji, setEmoji] = useState<string>();
  const [geoCodingError, setGeoCodingError] = useState<string>('');

  useEffect(
    function () {
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
  if (geoCodingError) return <Message message={geoCodingError} />;

  return (
    <form className='bg-base-100 rounded-lg py-8 px-12 w-full flex flex-col gap-4 shadow-lg'>
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
        <input
          id='date'
          onChange={e => setDate(e.target.value)}
          value={date.toString()}
          type='text'
          className='input input-bordered w-full'
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
        <button className='btn btn-primary px-8'>Add</button>
        <BackButton />
      </div>
    </form>
  );
}

export { Form };
