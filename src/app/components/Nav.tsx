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
    <nav className='relative w-full h-16'>
      <div className='flexBetween'>
        <Link 
          className='text-white flex flex-col md:flex-row md:h-16 md:w-3/4 h-32 w-full cursor-pointer text-2xl font-bold p-4'
          href={"/"}
        >
          Pickle Monster Cinematics
        </Link>
        <Link
          className='text-white flex flex-col md:flex-row md:h-16 md:w-1/4 h-32 w-full cursor-pointer text-2xl font-bold float-right p-4'
          href={"/gallery/"}
        >
          Aviation Art Gallery
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
