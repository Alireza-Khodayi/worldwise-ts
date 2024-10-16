import { BackButton } from '@/components/template/UI/BackButton';
import { useState } from 'react';

function Form() {
  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState('');
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState('');
  return (
    <form className='bg-base-100 rounded-lg py-8 px-12 w-full flex flex-col gap-4 shadow-lg'>
      <label className='form-control w-full'>
        <div className='label'>
          <span className='label-text'>City name</span>
        </div>
        <input
          type='text'
          // placeholder='Type here'
          className='input input-bordered w-full'
          onChange={e => setCityName(e.target.value)}
        />
        {/* <span className="absolute right-4 top-10 text-4xl">{emoji}</span> */}
      </label>

      <label className='form-control w-full'>
        <div className='label'>
          <span className='label-text'>When did you go to {cityName}?</span>
        </div>
        <input
          id='date'
          onChange={e => setDate(e.target.value)}
          value={date}
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
