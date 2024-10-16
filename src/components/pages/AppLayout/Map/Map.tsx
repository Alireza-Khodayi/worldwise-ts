import { useNavigate, useSearchParams } from 'react-router-dom';

function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  return (
    <div
      className='flex-1 h-full bg-base-100 relative'
      onClick={() => navigate('/app/form')}
    >
      <p>Lat = {lat}</p>
      <p>Lng = {lng}</p>
    </div>
  );
}

export { Map };
