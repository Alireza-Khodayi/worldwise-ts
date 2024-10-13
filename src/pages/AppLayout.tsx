import { Map } from '@/components/pages/AppLayout/Map';
import { Sidebar } from '@/components/pages/AppLayout/Sidebar';

function AppLayout() {
  return (
    <div className='flex h-screen overscroll-y-none relative'>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
