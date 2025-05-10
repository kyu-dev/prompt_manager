import React from 'react';
import { Link } from 'react-router-dom';
import { House } from 'lucide-react';

const NavBar = () => {
  return (
    <nav className="bg-amber-400">
      <Link to="/" className="flex flex-col">
        <House />
        Home
      </Link>
    </nav>
  );
};

export default NavBar;
