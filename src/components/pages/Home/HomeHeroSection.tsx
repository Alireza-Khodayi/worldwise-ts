import { AppRoutes } from '@/core/router';
import { Link } from 'react-router-dom';

function HomeHeroSection() {
  return (
    <main className='h-[calc(100vh-8rem)] md:rounded-lg mt-6 container mx-auto w-full hero-section-background bg-cover bg-center py-10 px-20'>
      <section className=' flex flex-col h-[85%] items-center justify-center gap-10 text-center'>
        <h1 className='font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-7xl'>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2 className='text-lg md:text-xl lg:text-2xl text-zinc-400'>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to={AppRoutes.app} className='btn btn-primary px-8'>
          Start tracking now
        </Link>
      </section>
    </main>
  );
}

export { HomeHeroSection };
