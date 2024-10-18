import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from 'react';

export interface CityItem {
  cityName: string;
  country: string;
  emoji: string;
  date: Date;
  notes?: string;
  position: {
    lat: number;
    lng: number;
  };
  id?: string;
}

// Define the context type
interface CityContextType {
  cities: CityItem[];
  loading: boolean;
  error: Error | null;
  currentCity: CityItem;
  getCity: (id: string) => void;
  createCity: (newCity: CityItem) => void;
  deleteCity: (id: string) => void;
}

const BASE_URL = 'http://localhost:8000';
// Create the context with a default value
const CityContext = createContext<CityContextType | undefined>(undefined);

interface CityProviderProps {
  children: ReactNode;
}

const CityProvider: React.FC<CityProviderProps> = ({ children }) => {
  const [cities, setCities] = useState<CityItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [currentCity, setCurrentCity] = useState<CityItem>({} as CityItem);

  useEffect(() => {
    async function fetchCities() {
      try {
        const response = await fetch(`${BASE_URL}/cities`); // Replace with your API
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result: CityItem[] = await response.json();
        setCities(result);
      } catch (error) {
        setError(
          error instanceof Error
            ? error
            : new Error('An unknown error occurred'),
        );
      } finally {
        setLoading(false);
      }
    }

    fetchCities();
  }, []);

  async function getCity(id: string) {
    try {
      const response = await fetch(`${BASE_URL}/cities/${id}`); // Replace with your API
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result: CityItem = await response.json();
      setCurrentCity(result);
    } catch (error) {
      setError(
        error instanceof Error ? error : new Error('An unknown error occurred'),
      );
    } finally {
      setLoading(false);
    }
  }

  async function createCity(newCity: CityItem) {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/cities`, {
        method: 'POST',
        body: JSON.stringify(newCity),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result: CityItem = await response.json();

      setCities(cities => [...cities, result]);
    } catch (error) {
      setError(
        error instanceof Error ? error : new Error('Error on creating city'),
      );
    } finally {
      setLoading(false);
    }
  }

  async function deleteCity(id: string) {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/cities/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setCities(cities => cities.filter(city => city.id !== id));
    } catch (error) {
      setError(
        error instanceof Error ? error : new Error('Error on deleting city...'),
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <CityContext.Provider
      value={{
        cities,
        loading,
        error,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CityContext.Provider>
  );
};

const useCities = () => {
  const context = useContext(CityContext);
  if (context === undefined)
    throw new Error('CitiesContext was used outside of the CitiesProvider');
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { CityProvider, useCities };
