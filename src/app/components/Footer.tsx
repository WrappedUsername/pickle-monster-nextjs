import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='flex justify-between text-center text-4xl font-bold'>
      <Link
        className='flex h-32 w-full cursor-pointer flex-col p-4 text-2xl font-bold md:h-16 md:w-3/4 md:flex-row'
        href={'/'}
      >
        Pickle Monster Cinematics
      </Link>
    </footer>
  );
};

export default Footer;
