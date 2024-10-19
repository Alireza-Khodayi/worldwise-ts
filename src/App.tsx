import { RouterProvider } from 'react-router-dom';
import { router } from '@/core/router';
import { CityProvider } from '@/core/contexts/CitiesContext';
import { AuthProvider } from '@/core/contexts/FakeAuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <CityProvider>
          <RouterProvider router={router} />
        </CityProvider>
      </AuthProvider>
    </>
  );
}

export default App;
