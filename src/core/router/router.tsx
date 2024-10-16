import { createBrowserRouter, Navigate } from 'react-router-dom';
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
import { CountriesList } from '@/components/pages/AppLayout/Sidebar/CountriesList';
import { City } from '@/components/pages/AppLayout/Sidebar/City';
import { Form } from '@/components/pages/AppLayout/Sidebar/Form';

export const router = createBrowserRouter([
  { path: AppRoutes.home, element: <HomePage /> },
  { path: AppRoutes.product, element: <ProductPage /> },
  { path: AppRoutes.pricing, element: <PricingPage /> },
  {
    path: AppRoutes.app,
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate replace to='cities' /> },
      { path: AppRoutes.cities, element: <CitiesList /> },
      { path: AppRoutes.cityById, element: <City /> },
      { path: AppRoutes.countries, element: <CountriesList /> },
      { path: AppRoutes.form, element: <Form /> },
    ],
  },
  { path: AppRoutes.login, element: <LoginPage /> },
  { path: AppRoutes.notFound, element: <NotFoundPage /> }, // 404
]);
