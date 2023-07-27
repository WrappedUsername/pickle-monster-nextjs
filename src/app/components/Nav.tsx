'use client';
import React, {useEffect, useState} from 'react';
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
  }, []);

  return (
    <nav className='relative h-16 w-full'>
      <div className='flexBetween'>
        <Link
          className='flex h-32 w-full cursor-pointer flex-col p-4 text-2xl font-bold text-white md:h-16 md:w-3/4 md:flex-row'
          href={'/'}
        >
          Pickle Monster Cinematics
        </Link>
        <p className='md:1/2 flex h-16 w-full flex-col items-center justify-between p-4 text-sm text-white md:flex-row'>
          A DCS World fan art and cinematic website
        </p>
        <Link
          className='float-right flex h-32 w-full cursor-pointer flex-col p-4 text-2xl font-bold text-white md:h-16 md:w-1/4 md:flex-row'
          href={'/gallery/'}
        >
          Art Gallery
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
