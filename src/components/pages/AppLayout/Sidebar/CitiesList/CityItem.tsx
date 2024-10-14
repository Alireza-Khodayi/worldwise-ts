import type { CityItem } from '@/core/context/CitiesContext';
import { formatDate } from '@/core/utilities/format-date';
import { XIcon } from '@/core/utilities/Icons';

interface IProps {
  city: CityItem;
}

function CityItem({ city }: IProps) {
  return (
    <li className='flex gap-6 items-center bg-base-100 rounded-lg py-4 px-8 border-l-4 border-primary cursor-pointer shadow-md hover:shadow-sm transition-all duration-300 hover:scale-[0.99]'>
      <span className='text-xl'>{city.emoji}</span>
      <h3 className='text-lg font-semibold mr-auto'>{city.cityName}</h3>
      <time className='text-sm'>({formatDate(city.date)})</time>
      <button className='btn btn-xs btn-circle btn-ghost'>
        <XIcon className='h-4 w-4' />
      </button>
    </li>
  );
}

export default CityItem;
