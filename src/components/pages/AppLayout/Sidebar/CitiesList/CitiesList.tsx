import { useCities } from '@/core/context/CitiesContext';
import CityItem from './CityItem';
import { Message } from '@/components/template/UI/Message';

function CitiesList() {
  const { cities, loading, error } = useCities();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!cities.length)
    return (
      <Message message='Add your first city by clicking on a city on the map.' />
    );
  return (
    <ul className='w-full h-[65vh] overflow-y-scroll overflow-x-hidden flex flex-col gap-6 no-scrollbar'>
      {cities.map(city => (
        <CityItem key={city.id} city={city} /> // Adjust according to your data structure
      ))}
    </ul>
  );
}

export { CitiesList };
