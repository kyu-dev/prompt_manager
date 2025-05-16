import { Outlet } from 'react-router-dom';
import SideBar from './sidebar/SideBar';

const Layout = () => (
  <div className=" flex flex-row h-full">
    <SideBar />
    <main>
      <Outlet /> {/* Là où les pages enfants s'affichent */}
    </main>
  </div>
);

export default Layout;
