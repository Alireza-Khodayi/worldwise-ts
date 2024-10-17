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
  date: string;
  notes: string;
  position: {
    lat: number;
    lng: number;
  };
  id: number;
}

// Define the context type
interface CityContextType {
  data: CityItem[];
  loading: boolean;
  error: Error | null;
  currentCity: CityItem;
  getCity: (id: number) => void;
}
const BASE_URL = 'http://localhost:8000';
// Create the context with a default value
const CityContext = createContext<CityContextType | undefined>(undefined);

interface CityProviderProps {
  children: ReactNode;
}

const CityProvider: React.FC<CityProviderProps> = ({ children }) => {
  const [data, setData] = useState<CityItem[]>([]);
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
        setData(result);
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

  async function getCity(id: number) {
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

  return (
    <CityContext.Provider
      value={{ data, loading, error, currentCity, getCity }}
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
