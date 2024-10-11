import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoutes } from './core/utilities/app-routes';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import ProductPage from './pages/ProductPage';

const router = createBrowserRouter([
  { path: AppRoutes.home, element: <HomePage /> },
  { path: AppRoutes.pricing, element: <PricingPage /> },
  { path: AppRoutes.product, element: <ProductPage /> },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
