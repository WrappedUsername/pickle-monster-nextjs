import React from 'react';
import Link from 'next/link';
import {FaDiscord, FaGithub} from 'react-icons/fa';
import {discordLink, githubLink} from '../context/constants';

const Footer = () => {
  return (
    <footer className='relative h-16 w-full'>
      <div className='flexBetween'>
        <Link
          className='text-white flex h-16 w-full cursor-pointer flex-col p-4 text-2xl font-bold md:h-16 md:w-1/2 md:flex-row'
          href={'/'}
        >
          Pickle Monster Cinematics
        </Link>
        <Link
          href={discordLink}
          className='text-white float-right mx-4 my-4 flex cursor-pointer items-center justify-center text-2xl'
        >
          <FaDiscord />
        </Link>
        <Link
          href={githubLink}
          className='text-white float-right mx-4 my-4 flex cursor-pointer items-center justify-center text-2xl'
        >
          <FaGithub />
        </Link>
        <p className='text-white md:1/2 flex h-16 w-full flex-col items-center justify-center p-4 text-sm md:flex-row'>
          &copy; {new Date().getFullYear()} Pickle Monster Cinematics. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
