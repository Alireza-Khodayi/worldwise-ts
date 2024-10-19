import { Map } from '@/components/pages/AppLayout/Map';
import { Sidebar } from '@/components/pages/AppLayout/Sidebar';
import { User } from '@/components/template/UI/User';

function AppLayout() {
  return (
    <div className='flex h-screen overscroll-y-none relative'>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
