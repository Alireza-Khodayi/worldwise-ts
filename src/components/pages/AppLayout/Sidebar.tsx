import { Logo } from '@/components/template/UI/Logo';
import { AppNav } from './AppNav';
import AppFooter from './AppFooter';
import { Outlet } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='flex flex-col basis-[56rem] items-center h-screen px-12 py-20 bg-base-200'>
      <Logo />
      <AppNav />
      <Outlet />
      <AppFooter />
    </div>
  );
}

export { Sidebar };
