import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative flex flex-wrap items-center justify-between p-6 text-[#ECEFF6] bg-gradient-to-r from-gray-800 to-gray-950">
      <div className="flex items-center mr-4">
        <Link to={'/'} className="font-bold mr-2">
          <h1>RPG Store</h1>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
          onClick={toggleMenu}
        >
          <svg
            className="h-4 w-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 4H4V6H16V4ZM16 9H4V11H16V9ZM4 14H16V16H4V14Z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 4H18V6H2V4ZM2 9H18V11H2V9ZM2 14H18V16H2V14Z"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } w-full flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <ul className="flex flex-col lg:flex-row lg:ml-auto lg:justify-center lg:gap-8 lg:mr-48">
          <li className="transition hover:ease-in-out hover:text-green-500 hover:scale-125">
            <Link to={`/category/armas`}>
              <i className="fa-solid fa-wand-sparkles m-2"></i> Armas
            </Link>
          </li>
          <li className="transition hover:ease-in-out hover:text-green-500 hover:scale-125">
            <Link to={`/category/armadura`}>
              <i className="fa-solid fa-shield-halved m-2"></i> Armaduras
            </Link>
          </li>
          <li className="transition hover:ease-in-out hover:text-green-500 hover:scale-125">
            <Link to={`/category/consumibles`}>
              <i className="fa-solid fa-flask m-2"></i> Pociones
            </Link>
          </li>
          <li className="transition hover:ease-in-out hover:text-green-500 hover:scale-125">
            <Link to={`/category/mascota`}>
              <i className="fa-solid fa-paw m-2"></i> Mascotas
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden lg:block">
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
