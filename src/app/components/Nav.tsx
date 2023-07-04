import React from 'react';
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-row h-26 text-2xl font-bold cursor-pointer hover:green-300">
        <Link href={'/gallery/'}>Gallery</Link>
        </nav>
  )
}

export default Navbar