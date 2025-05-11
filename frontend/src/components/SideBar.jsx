import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { House, PanelLeftClose, PanelLeftOpen, CirclePlus } from 'lucide-react';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev); //switch l'état de isOpen de true à false et de false à true
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
        //cmd+k pour ouvrir la sidebar
        toggleSidebar();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown); //clean l'event listener
    };
  }, []);

  return (
    <div className="flex h-screen">
      <nav
        className={`bg-blue-950 ${
          isOpen ? 'w-64' : 'w-16' // si isOpen est true agrandie la w de la sidebar
        } flex flex-col  justify-between`}
      >
        <div className="flex flex-col p-4 text-white gap-5">
          <Link to="/" className="flex items-center gap-2 ">
            <House size={20} />
            {isOpen && <span>Home</span>}
          </Link>

          <div className="flex items-center gap-2 ">
            <CirclePlus size={20} />
            {isOpen && <span>Créer un prompt</span>}
          </div>
        </div>

        <div className="p-4 mt-auto">
          <button
            onClick={toggleSidebar}
            className="focus:outline-none text-white"
            aria-label="Toggle Sidebar"
          >
            {isOpen ? (
              <PanelLeftClose size={20} />
            ) : (
              <PanelLeftOpen size={20} />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
