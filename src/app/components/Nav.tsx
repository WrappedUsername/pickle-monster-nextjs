import React from 'react';
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="relative">
    <Link className="fixed h-24 flex-row text-2xl font-bold cursor-pointer" href={'/gallery/'}>Gallery</Link>
    </nav>
  )
}

export default Navbar