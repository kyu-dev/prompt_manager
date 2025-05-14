import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  House,
  PanelLeftClose,
  PanelLeftOpen,
  CirclePlus,
  FolderPlus,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  //liens des button
  const links = [
    {
      to: '/',
      icon: <House size={20} />,
      label: 'Home',
      variant: 'ghost',
      className: '',
    },
    {
      to: '/new-prompt',
      icon: <CirclePlus size={20} />,
      label: 'Créer un prompt',
    },
    {
      icon: <FolderPlus size={20} />,
      label: 'Créer un fichier',
    },
  ];

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
        toggleSidebar();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="flex h-screen">
      <nav
        className={`bg-background border-r ${
          isOpen ? 'w-64' : 'w-16'
        } flex flex-col justify-between transition-all duration-300 ease-in-out overflow-hidden`}
      >
        <div className="flex flex-col px-2 gap-2 pt-3">
          {links.map(({ to, icon, label, variant, className }) => (
            <Button asChild key={label} variant={variant} className={className}>
              <Link to={to}>
                {icon}
                {isOpen && <span>{label}</span>}
              </Link>
            </Button>
          ))}
          {isOpen && (
            <div className="pt-4">
              <h3 className="text-gray-700 ">All Prompt</h3>
              <Separator />
            </div>
          )}
        </div>

        <div className="p-4 mt-auto">
          <Button
            onClick={toggleSidebar}
            variant="ghost"
            size="icon"
            aria-label="Toggle Sidebar"
          >
            {isOpen ? (
              <PanelLeftClose size={20} />
            ) : (
              <PanelLeftOpen size={20} />
            )}
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
