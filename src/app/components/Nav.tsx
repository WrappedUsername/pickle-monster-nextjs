"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className='relative'>
      <div className='flex flex-row items-center justify-between'>
      <div className="flex h-24 w-3/4 p-2">
        <Link 
          className='fixed h-24 w-3/4 cursor-pointer text-2xl font-bold'
          href={"/"}
        >
          Pickle Monster Cinematics
        </Link>
        </div>
        <div className="flex h-24 w-1/4 p-2">
        <Link
          className='fixed h-24 w-1/4 cursor-pointer text-2xl font-bold float-right'
          href={"/gallery/"}
        >
          Gallery
        </Link>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
