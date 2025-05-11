import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { House, PanelLeftClose, PanelLeftOpen } from 'lucide-react';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <nav className={`bg-amber-400 h-screen ${isOpen ? 'w-64' : 'w-0'}`}>
        <div className="flex justify-between items-center p-4">
          {isOpen && (
            <Link to="/" className="flex gap-2">
              <House size={20} />
              <span>Dashboard</span>
            </Link>
          )}
        </div>
      </nav>
      <button onClick={toggleSidebar} className="p-2 ">
        {isOpen ? <PanelLeftClose size={20} /> : <PanelLeftOpen size={20} />}
      </button>
    </div>
  );
};

export default SideBar;
