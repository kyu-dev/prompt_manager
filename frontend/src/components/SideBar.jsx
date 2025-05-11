import React from 'react';
import { Link } from 'react-router-dom';
import { House } from 'lucide-react';
import { Button } from './ui/button';

const SideBar = () => {
  return (
    <nav className="bg-amber-400">
      <Link to="/" className="flex flex-col">
        <House />
        <Button />
      </Link>
    </nav>
  );
};

export default SideBar;
