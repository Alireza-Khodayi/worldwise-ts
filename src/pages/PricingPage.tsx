// Uses the same styles as Product

import { Navbar } from '@/components/template/layout/Navbar';

export default function Product() {
  return (
    <>
      <Navbar />
      <main className='container mx-auto w-full min-h-[calc(100vh-8rem)] mt-6'>
        <section className='px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center'>
          <div>
            <h2 className='font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-7xl mb-8 mx-8'>
              Simple pricing.
              <br />
              Just $9/month.
            </h2>
            <p className='text-lg md:text-xl lg:text-2xl text-zinc-400'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              vel labore mollitia iusto. Recusandae quos provident, laboriosam
              fugit voluptatem iste.
            </p>
          </div>
          <img
            className='w-full rounded-lg shadow-2xl'
            src='img-2.jpg'
            alt='overview of a large city with skyscrapers'
          />
        </section>
      </main>
    </>
  );
}
