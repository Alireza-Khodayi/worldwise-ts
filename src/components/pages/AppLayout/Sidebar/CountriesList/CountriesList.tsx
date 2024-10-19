import { Message } from '@/components/template/UI/Message';
import { CityItem, useCities } from '@/core/contexts/CitiesContext';
import { CountryItem } from './CountryItem';

interface Country {
  country: string;
  emoji: string;
}

function CountriesList() {
  const { cities, loading, error } = useCities();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!cities.length)
    return (
      <Message message='Add your first city by clicking on a city on the map.' />
    );

  const countries: Country[] = cities.reduce<Country[]>(
    (arr, city: CityItem) => {
      if (!arr.map(el => el.country).includes(city.country)) {
        return [...arr, { country: city.country, emoji: city.emoji }];
      } else return arr;
    },
    [],
  );

  return (
    <ul className='w-full overflow-y-scroll overflow-x-hidden grid grid-cols-2 gap-6 no-scrollbar'>
      {countries.map((country, index) => (
        <CountryItem key={index} country={country} />
      ))}
    </ul>
  );
}

export { CountriesList };
