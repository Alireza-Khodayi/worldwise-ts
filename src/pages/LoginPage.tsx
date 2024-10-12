import { Navbar } from '@/components/template/layout/Navbar';
import { EmailIcon, KeyIcon } from '@/core/utilities/Icons';
import { useState } from 'react';

export default function LoginPage() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('qwerty');

  return (
    <>
      <Navbar />
      <main className='container w-full mx-auto flex justify-center items-center h-[calc(90vh-20rem)] m-10'>
        <form className='bg-base-200 rounded-lg py-4 px-8 w-full flex flex-col gap-8 shadow-md mt-8 max-w-lg'>
          <h2 className='font-bold text-lg text-zinc-200'>Login</h2>
          <div className='flex flex-col gap-2'>
            <label className='input input-bordered border-opacity-50 flex items-center gap-2'>
              <EmailIcon />
              <input
                type='email'
                id='email'
                className='grow'
                placeholder='Email'
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
            </label>
          </div>

          <div className='flex flex-col gap-2'>
            <label className='input input-bordered border-opacity-50 flex items-center gap-2'>
              <KeyIcon />
              <input
                type='password'
                id='password'
                className='grow'
                placeholder='Password'
                onChange={e => setPassword(e.target.value)}
                value={password}
              />
            </label>
          </div>

          <div>
            <button className='btn btn-primary px-8'>Login</button>
          </div>
        </form>
      </main>
    </>
  );
}
