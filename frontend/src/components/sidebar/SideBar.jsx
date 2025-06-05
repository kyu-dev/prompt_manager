import React, { useCallback, useEffect } from 'react';
import { SidebarLinks } from './SidebarLinks.jsx';
import {
  House,
  PanelLeftClose,
  PanelLeftOpen,
  LibraryBig,
  Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SearchBar } from './SearchBar.jsx';
import { CreatPromptBtn } from './CreatPromptBtn.jsx';
import { CreatFolderBtn } from './CreatFolderBtn.jsx';
import { LogoutButton } from './LogoutButton';
import FolderList from './FolderList.jsx';
import { useSidebarStore } from '@/store/sidebar.js';

const SideBar = () => {
  const { isOpen, toggle: rawToggle } = useSidebarStore();

  const toggle = useCallback(() => {
    rawToggle();
  }, [rawToggle]);

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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        toggle();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggle]);

  //============================================//
  //=============== COMPONENTS =================//
  //============================================//

  return (
    <div className="flex h-screen fixed">
      <nav
        className={`bg-background border-r ${
          isOpen ? 'w-64' : 'w-16'
        } flex flex-col justify-between transition-all duration-300 ease-in-out overflow-hidden`}
      >
        <div className="flex flex-col px-2 gap-2 pt-3">
          <div className="py-4">
            <SearchBar isOpen={isOpen} />
          </div>

          {links.map((item) => (
            <SidebarLinks key={item.label} item={item} isOpen={isOpen} />
          ))}

          <CreatPromptBtn isOpen={isOpen} />
          <CreatFolderBtn isOpen={isOpen} />

          {isOpen && (
            <div className="flex flex-col w-full pt-4 gap-2">
              <Separator />
              <h3 className="whitespace-nowrap text-sm text-gray-600">
                Vos dossiers
              </h3>
              <FolderList />
            </div>
          )}
        </div>

        <div className={`p-4 mt-auto ${isOpen && 'flex justify-between'}`}>
          <Button
            onClick={toggle}
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
          <LogoutButton isOpen={isOpen} />
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
