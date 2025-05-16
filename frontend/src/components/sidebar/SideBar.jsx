import React, { useState, useEffect } from 'react';
import { SidebarLinks } from './SidebarLinks.jsx';
import {
  House,
  PanelLeftClose,
  PanelLeftOpen,
  CirclePlus,
  FolderPlus,
  LibraryBig,
  Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CommandMenu } from './SearchBar.jsx';
import { DialogDemo } from './CreatPromptBtn.jsx';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  //liens des button
  const links = [
    {
      to: '/',
      type: 'link',
      icon: <House />,
      label: 'Home',
      variant: 'ghost',
    },
    {
      to: '/library',
      type: 'link',
      icon: <LibraryBig />,
      label: 'Library',
      variant: 'ghost',
    },
    {
      to: '/library',
      type: 'link',
      icon: <Star />,
      label: 'Favoris',
      variant: 'ghost',
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

  //============================================//
  //=============== COMPONENTS =================//
  //============================================//

  return (
    <div className="flex h-screen">
      <nav
        className={`bg-background border-r ${
          isOpen ? 'w-64' : 'w-16'
        } flex flex-col justify-between transition-all duration-300 ease-in-out overflow-hidden`}
      >
        <div className="flex flex-col px-2 gap-2 pt-3">
          <div className="py-4">
            <CommandMenu isOpen={isOpen} />
          </div>

          {links.map((item) => (
            <SidebarLinks key={item.label} item={item} isOpen={isOpen} />
          ))}

          <DialogDemo />

          {isOpen && (
            <div className="flex flex-col w-full pt-4 gap-2">
              <Separator />
              <h3 className="whitespace-nowrap text-sm text-gray-600">
                Vos dossiers
              </h3>
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
