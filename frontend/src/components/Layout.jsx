import { Outlet } from 'react-router-dom';
import SideBar from './sidebar/SideBar';
import { Toaster } from '@/components/ui/sonner';
import { useSidebarStore } from '../store/sidebar';

const Layout = () => {
  const { isOpen } = useSidebarStore();
  return (
    <div className=" flex flex-row h-full">
      <SideBar />
      <main
        className={`w-full ${
          isOpen ? 'pl-64' : 'pl-16'
        } transition-all duration-300 ease-in-out`}
      >
        <Outlet /> {/* Là où les pages enfants s'affichent */}
      </main>
      <Toaster />
    </div>
  );
};

export default Layout;
