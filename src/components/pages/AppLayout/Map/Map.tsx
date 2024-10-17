import { useCities } from '@/core/context/CitiesContext';
import { LatLngExpression } from 'leaflet';
import L from 'leaflet';
import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useSearchParams } from 'react-router-dom';
import { ChangeCenter } from './ChangeCenter';
import DetectClick from './DetectClick';

function Map() {
  const { data } = useCities();

  const [mapPosition, setMapPosition] = useState<LatLngExpression>([40, 0]);
  const [searchParams] = useSearchParams();
  const mapLat = searchParams.get('lat');
  const mapLng = searchParams.get('lng');

  const markerIcon = new L.Icon({
    iconUrl:
      'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([Number(mapLat), Number(mapLng)]);
    },
    [mapLat, mapLng],
  );

  return (
    <div className='flex-1 h-full bg-base-100 relative'>
      <MapContainer
        className='flex-1 h-full bg-base-100 relative'
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {data.map(city => (
          <Marker position={city.position} key={city.id} icon={markerIcon}>
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

export { Map };
