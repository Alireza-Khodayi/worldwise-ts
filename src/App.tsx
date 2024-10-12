import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoutes } from '@/core/utilities/app-routes';
import {
  AppLayout,
  HomePage,
  LoginPage,
  NotFoundPage,
  PricingPage,
  ProductPage,
} from '@/pages';

const router = createBrowserRouter([
  { path: AppRoutes.home, element: <HomePage /> },
  { path: AppRoutes.product, element: <ProductPage /> },
  { path: AppRoutes.pricing, element: <PricingPage /> },
  { path: AppRoutes.app, element: <AppLayout /> },
  { path: AppRoutes.login, element: <LoginPage /> },
  { path: AppRoutes.notFound, element: <NotFoundPage /> }, // 404
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
