import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const Layout = () => (
  <div>
    <SideBar />
    <main>
      <Outlet /> {/* Là où les pages enfants s'affichent */}
    </main>
  </div>
);

export default Layout;
