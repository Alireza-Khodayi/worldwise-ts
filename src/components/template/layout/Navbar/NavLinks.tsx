import { AppRoutes } from '@/core/utilities/app-routes';
import { NavLink } from 'react-router-dom';

function NavLinks() {
  return (
    <nav className=''>
      <ul className='gap-3 py-4 hidden md:flex'>
        <li>
          <NavLink className='nav-link' to={AppRoutes.pricing}>
            PRICING
          </NavLink>
        </li>
        <li>
          <NavLink className='nav-link' to={AppRoutes.product}>
            PRODUCT
          </NavLink>
        </li>
        <li>
          <NavLink className='btn btn-primary px-6' to={AppRoutes.login}>
            LOGIN
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export { NavLinks };
