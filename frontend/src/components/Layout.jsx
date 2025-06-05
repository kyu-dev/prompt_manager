import { Outlet } from 'react-router-dom';
import SideBar from './sidebar/SideBar';
import { Toaster } from '@/components/ui/sonner';
const Layout = () => (
  <div className=" flex flex-row h-full">
    <SideBar />
    <main className="w-full">
      <Outlet /> {/* Là où les pages enfants s'affichent */}
    </main>
    <Toaster />
  </div>
);

export default Layout;
