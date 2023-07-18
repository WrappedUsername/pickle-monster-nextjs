import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='relative'>
      <div className="flex flex-col md:flex-row h-24 w-full justify-between p-2">
        <Link 
          className='fixed h-24 cursor-pointer text-2xl font-bold'
          href={"/"}
        >
          Pickle Monster Cinematics
        </Link>
        </div>
        <div className="flex flex-col md:flex-row h-24 w-full justify-between p-2">
        <Link
          className='fixed h-24 cursor-pointer text-2xl font-bold float-right'
          href={"/gallery/"}
        >
          Gallery
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
