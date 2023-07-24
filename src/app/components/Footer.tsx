import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='relative w-full h-16'>
        <div className='flexBetween'>
      <Link
        className='flex h-16 w-full cursor-pointer flex-col p-4 text-2xl font-bold md:h-16 md:w-1/2 md:flex-row'
        href={'/'}
      >
        Pickle Monster Cinematics
      </Link>
      <p className="flex flex-col md:flex-row h-16 w-full md:1/2 text-sm justify-center items-center p-4">
          &copy; {new Date().getFullYear()} Pickle Monster Cinematics. All rights
          reserved.
        </p>
        </div>
    </footer>
  );
};

export default Footer;
