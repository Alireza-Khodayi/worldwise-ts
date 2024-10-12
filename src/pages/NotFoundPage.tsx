import { Link } from 'react-router-dom';
import { Navbar } from '@/components/template/layout/Navbar';
import { AppRoutes } from '@/core/utilities/app-routes';

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <div>404 Page Not Found!</div>
      <Link to={AppRoutes.home}>Go to home page</Link>
    </>
  );
}
