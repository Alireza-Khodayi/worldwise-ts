import { BackButton } from '@/components/template/UI/BackButton';
import { formatDate } from '@/core/utilities/format-date';

function City() {
  // TEMP DATA
  const currentCity = {
    cityName: 'Lisbon',
    emoji: '🇵🇹',
    date: '2027-10-31T15:59:59.138Z',
    notes: 'My favorite city so far!',
  };

  const { cityName, emoji, date, notes } = currentCity;

  return (
    <div className='py-8 px-12 max-h-[70%] bg-base-100 shadow-lg rounded-lg overflow-auto w-full flex flex-col gap-8'>
      <div className='flex flex-col gap-2'>
        <h6 className='uppercase text-md font-bold text-zinc-300'>City name</h6>
        <h3 className='text-xl font-semibold flex items-center gap-4'>
          <span className='text-3xl'>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className='flex flex-col gap-2'>
        <h6 className='uppercase text-md font-bold text-zinc-300'>
          You went to {cityName} on
        </h6>
        <p className='text-sm'>{formatDate(date)}</p>
      </div>

      {notes && (
        <div className='flex flex-col gap-2'>
          <h6 className='uppercase text-md font-bold text-zinc-300'>
            Your notes
          </h6>
          <p className='text-sm'>{notes}</p>
        </div>
      )}

      <div className='flex flex-col gap-2'>
        <h6 className='uppercase text-md font-bold text-zinc-300'>
          Learn more
        </h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target='_blank'
          rel='noreferrer'
          className='text-sm text-primary'
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <BackButton />
      </div>
    </div>
  );
}

export { City };
