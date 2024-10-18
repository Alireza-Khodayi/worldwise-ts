import {
  createContext,
  useEffect,
  ReactNode,
  useContext,
  useReducer,
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

interface State {
  cities: CityItem[];
  loading: boolean;
  error: Error | null;
  currentCity: CityItem;
}

interface Action {
  type:
    | 'loading'
    | 'cities/loaded'
    | 'city/loaded'
    | 'city/created'
    | 'city/deleted'
    | 'rejected';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

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
const CityContext = createContext<CityContextType>({} as CityContextType);

const initialState: State = {
  cities: [],
  loading: false,
  currentCity: {} as CityItem,
  error: null,
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'loading':
      return { ...state, loading: true };

    case 'cities/loaded':
      return {
        ...state,
        loading: false,
        cities: action.payload,
      };

    case 'city/loaded':
      return {
        ...state,
        loading: false,
        currentCity: action.payload,
      };

    case 'city/created':
      return {
        ...state,
        loading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case 'city/deleted':
      return {
        ...state,
        loading: false,
        cities: state.cities.filter(city => city.id !== action.payload),
        currentCity: {},
      };

    case 'rejected':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      throw new Error('Unknown action type');
  }
}

interface CityProviderProps {
  children: ReactNode;
}

const CityProvider: React.FC<CityProviderProps> = ({ children }) => {
  const [{ cities, loading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  useEffect(() => {
    async function fetchCities() {
      dispatch({ type: 'loading' });
      try {
        const response = await fetch(`${BASE_URL}/cities`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result: CityItem[] = await response.json();
        dispatch({ type: 'cities/loaded', payload: result });
      } catch {
        dispatch({
          type: 'rejected',
          payload: 'There was an error on loading cities.',
        });
      }
    }

    fetchCities();
  }, []);

  async function getCity(id: string) {
    if (id === currentCity.id) return;

    dispatch({ type: 'loading' });

    try {
      const response = await fetch(`${BASE_URL}/cities/${id}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result: CityItem = await response.json();

      dispatch({ type: 'city/loaded', payload: result });
    } catch {
      dispatch({
        type: 'rejected',
        payload: 'There was an error on loading city.',
      });
    }
  }

  async function createCity(newCity: CityItem) {
    dispatch({ type: 'loading' });

    try {
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

      dispatch({ type: 'city/created', payload: result });
    } catch {
      dispatch({
        type: 'rejected',
        payload: 'There was an error on creating the city.',
      });
    }
  }

  async function deleteCity(id: string) {
    dispatch({ type: 'loading' });

    try {
      const response = await fetch(`${BASE_URL}/cities/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      dispatch({ type: 'city/deleted', payload: id });
    } catch {
      dispatch({
        type: 'rejected',
        payload: 'There was an error on deleting the city.',
      });
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
