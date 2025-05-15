import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
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
  const actions = [
    {
      to: '/',
      type: 'link',
      icon: <House />,
      label: 'Home',
      variant: 'ghost',
      className: '',
    },
    {
      type: 'button',
      icon: <CirclePlus size={20} />,
      label: 'Créer un prompt',
    },
    {
      icon: <FolderPlus size={20} />,
      label: 'Créer un fichier',
      variant: 'secondary',
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
          {actions.map((item) => {
            if (item.type === 'link') {
              return (
                <Button asChild key={item.label} variant={item.variant}>
                  <Link to={item.to}>
                    {item.icon}
                    {isOpen && <span>{item.label}</span>}
                  </Link>
                </Button>
              );
            }
            if (item.type === 'button') {
              return (
                <Button variant={item.variant}>
                  {item.icon}
                  {isOpen && <span>{item.label}</span>}
                </Button>
              );
            }
            return null;
          })}

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="pt-4"
            >
              <h3>All prompt</h3>
              <Separator />
            </motion.div>
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
