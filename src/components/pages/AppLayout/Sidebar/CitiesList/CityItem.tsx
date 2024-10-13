import type { CityItem } from '@/core/context/CitiesContext';

interface IProps {
  city: CityItem;
}

function CityItem({ city }: IProps) {
  return (
    <li className='flex gap-6 items-center bg-base-100 rounded-lg py-4 px-8 border-l-4 border-primary cursor-pointer'>
      {city.emoji}
      {city.cityName}
      {city.country}
    </li>
  );
}

export default CityItem;
