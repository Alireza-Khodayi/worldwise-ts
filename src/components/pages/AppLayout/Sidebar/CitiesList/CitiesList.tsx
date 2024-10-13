import { useCities } from '@/core/context/CitiesContext';
import CityItem from './CityItem';

function CitiesList() {
  const context = useCities();
  if (!context) return <p>Somthing went wrong!</p>;

  const { data, loading, error } = context;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);
  return (
    <ul className='w-full h-[65vh] overflow-y-scroll overflow-x-hidden flex flex-col gap-6 no-scrollbar'>
      {data.map(city => (
        <CityItem key={city.id} city={city} /> // Adjust according to your data structure
      ))}
    </ul>
  );
}

export { CitiesList };
