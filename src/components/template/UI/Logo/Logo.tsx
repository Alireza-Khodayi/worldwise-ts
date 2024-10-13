import { AppRoutes } from '@/core/router/app-routes';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to={AppRoutes.home}>
      <img className='h-10 w-full' src='/logo.png' alt='WorldWise logo' />
    </Link>
  );
}

export { Logo };
