import { RouterProvider } from 'react-router-dom';
import { router } from '@/core/router';
import { CityProvider } from '@/core/context/CitiesContext';

function App() {
  return (
    <>
      <CityProvider>
        <RouterProvider router={router} />
      </CityProvider>
    </>
  );
}

export default App;
