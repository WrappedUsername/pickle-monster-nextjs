"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
        try {
            setLoading(false);
        } catch (error) {
            setError(true);
        }
    },
[]);

  return (
    <nav className='relative h-16 w-screen'>
      <div className='flexBetween'>
        <Link 
          className='flex flex-col md:flex-row h-16 w-3/4 cursor-pointer text-2xl font-bold'
          href={"/"}
        >
          Pickle Monster Cinematics
        </Link>
        <Link
          className='flex flex-col md:flex-row h-16 w-1/4 cursor-pointer text-2xl font-bold float-right'
          href={"/gallery/"}
        >
          Gallery
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
