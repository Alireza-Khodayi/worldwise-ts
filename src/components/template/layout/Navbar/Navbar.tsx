import { NavLink } from 'react-router-dom';
import { AppRoutes } from '@/core/utilities/app-routes';

function Navbar() {
  return (
    <header className='border-b border-primary border-opacity-30 bg-base-300 shadow-lg'>
      <nav className='container mx-auto w-full'>
        <ul className='flex gap-3 py-4'>
          <li>
            <NavLink className='nav-link' to={AppRoutes.home}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className='nav-link' to={AppRoutes.pricing}>
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink className='nav-link' to={AppRoutes.product}>
              Product
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Navbar };
