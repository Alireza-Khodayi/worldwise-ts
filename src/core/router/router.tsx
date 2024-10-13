import { createBrowserRouter } from 'react-router-dom';
import { AppRoutes } from './app-routes';
import {
  AppLayout,
  HomePage,
  LoginPage,
  NotFoundPage,
  PricingPage,
  ProductPage,
} from '@/pages';
import { CitiesList } from '@/components/pages/AppLayout/Sidebar/CitiesList';

export const router = createBrowserRouter([
  { path: AppRoutes.home, element: <HomePage /> },
  { path: AppRoutes.product, element: <ProductPage /> },
  { path: AppRoutes.pricing, element: <PricingPage /> },
  {
    path: AppRoutes.app,
    element: <AppLayout />,
    children: [
      { index: true, element: <CitiesList /> },
      { path: AppRoutes.cities, element: <CitiesList /> },
      { path: AppRoutes.countries, element: <p>countries</p> },
      { path: AppRoutes.form, element: <p>form</p> },
    ],
  },
  { path: AppRoutes.login, element: <LoginPage /> },
  { path: AppRoutes.notFound, element: <NotFoundPage /> }, // 404
]);
