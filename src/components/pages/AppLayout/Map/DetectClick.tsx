import { useMapEvents } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';

function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: e => navigate(`/app/form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
  return null;
}

export default DetectClick;
