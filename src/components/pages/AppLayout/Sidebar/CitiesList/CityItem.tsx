import { useCities, type CityItem } from '@/core/context/CitiesContext';
import { formatDate } from '@/core/utilities/format-date';
import { XIcon } from '@/core/utilities/Icons';
import { Link } from 'react-router-dom';

interface IProps {
  city: CityItem;
}

function CityItem({ city }: IProps) {
  const { currentCity, deleteCity } = useCities();

  function handleDelete(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    deleteCity(city.id!);
  }

  return (
    <li>
      <Link
        to={`/app/cities/${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
        className={`flex gap-6 items-center bg-base-100 rounded-lg py-4 px-8 border-l-4 border-primary cursor-pointer shadow-md hover:shadow-sm transition-all duration-300 hover:scale-[0.99] ${
          city.id === currentCity.id ? 'border border-primary' : ''
        }`}
      >
        <span className='text-xl'>{city.emoji}</span>
        <h3 className='text-lg font-semibold mr-auto'>{city.cityName}</h3>
        <time className='text-sm'>({formatDate(city.date)})</time>
        <button
          className='btn btn-xs btn-circle btn-ghost'
          onClick={handleDelete}
        >
          <XIcon className='h-4 w-4' />
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
