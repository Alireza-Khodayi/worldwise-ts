import { Logo } from './Logo';
import { NavLinks } from './NavLinks';

function Navbar() {
  return (
    <header className='border-b border-primary border-opacity-30 bg-base-300 shadow-lg w-full'>
      <div className='container mx-auto w-full flex items-center justify-between'>
        <Logo />
        <NavLinks />
      </div>
    </header>
  );
}

export { Navbar };
