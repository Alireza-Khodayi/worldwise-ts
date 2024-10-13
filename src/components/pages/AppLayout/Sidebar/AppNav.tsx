import { AppRoutes } from '@/core/router';
import { NavLink } from 'react-router-dom';

function AppNav() {
  return (
    <nav className='mt-12 mb-8'>
      <ul className='flex bg-base-100 rounded-lg py-1'>
        <li>
          <NavLink
            to={AppRoutes.cities}
            className='app-nav border border-gray-400 border-opacity-30 rounded-l-lg uppercase text-sm font-semibold px-4 py-2'
          >
            Cities
          </NavLink>
        </li>
        <li>
          <NavLink
            to={AppRoutes.countries}
            className='app-nav border border-gray-400 border-opacity-30 rounded-r-lg uppercase text-sm font-semibold px-4 py-2'
          >
            Countries
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export { AppNav };
