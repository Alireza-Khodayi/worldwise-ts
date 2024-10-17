import { LatLngTuple } from 'leaflet';
import { useState } from 'react';

function useGeolocation(defaultPosition = null) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [position, setPosition] = useState<LatLngTuple | null>(defaultPosition);
  const [error, setError] = useState<string | null>(null);

  function getPosition() {
    if (!navigator.geolocation)
      return setError('Your browser does not support geolocation');

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      pos => {
        setPosition([pos.coords.latitude, pos.coords.longitude] as LatLngTuple);
        setIsLoading(false);
      },
      error => {
        setError(error.message);
        setIsLoading(false);
      },
    );
  }

  return { isLoading, position, error, getPosition };
}

export { useGeolocation };
