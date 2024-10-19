import { useAuth } from '@/core/contexts/FakeAuthContext';
import { useNavigate } from 'react-router-dom';

function User() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/');
  }

  return (
    <div className='absolute top-4 right-4 bg-base-100 py-2 px-4 rounded-lg z-[999] shadow-lg flex items-center gap-6'>
      <div className='avatar'>
        <div className='w-12 rounded-full'>
          <img src={user?.avatar} alt={user?.name} />
        </div>
      </div>
      <span className='font-semibold'>Welcome, {user?.name}</span>
      <button
        className='btn btn-sm btn-ghost text-sm uppercase'
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export { User };
