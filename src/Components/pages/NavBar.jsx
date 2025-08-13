//refc is a sort form

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

import Mode from "./Mode"; // Import your toggle component


// NavBar component
const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'portfolio' },
    { id: 4, link: 'experience' },
    { id: 5, link: 'contact' },
  ];

  return (
      <div className="flex justify-between items-center w-full h-20 px-4 fixed bg-white text-black dark:bg-black dark:text-white z-50">

      <div>
        <h1 className="text-5xl font-signature ml-2">Portfolio</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li key={id} className="px-4 cursor-pointer capitalize text-gray-500 hover:scale-105 duration-200">
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

        {/* Mode Toggle (Desktop) */}
  <div className="hidden md:block ml-4">
    <Mode />
  </div>

 {/* Hamburger icon for mobile */}
      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
 {/* Mobile menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize text-gray-700 dark:text-gray-400 hover:scale-105 duration-200">
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
          {/* Mode Toggle (Mobile) */}
      <li className="py-6">
        <Mode />
      </li>
        </ul>
      )}
      
    </div>
  );
};

export default NavBar;



