"use client";
import { useState } from "react";
import { FiMenu } from "react-icons/fi"; // Install react-icons if needed
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-yellow-300 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Title / Logo */}
        <h1 className="text-2xl font-bold text-black"><a href="./">Badru Zaman Transport</a></h1>

        {/* Menu items for medium and larger screens */}
        <ul className="hidden md:flex gap-8 items-center text-black font-semibold">
          <li>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-white" href="/contact">
              Contact Us
            </Link>
          </li>
          {/* Get Quote link */}
          <li>
            <Link
              href={`https://wa.me/0526353632?text=Hi, I would like to get a quote.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black font-bold py-2 px-4 rounded transition duration-200 hover:bg-yellow-500 hover:text-white"
            >
              Get Quote
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black text-2xl p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          >
            <FiMenu />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute z-10 top-16 left-0 w-full bg-gray-100 text-black p-4 shadow-md md:hidden">
            <ul className="flex flex-col gap-4 font-medium">
              <li>
                <Link onClick={() => setIsOpen(false)} className="block py-2 " href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsOpen(false)} className="block py-2" href="/contact">
                  Contact Us
                </Link>
              </li>
              {/* Get Quote link in mobile menu */}
              <li>
                <Link
                  onClick={() => setIsOpen(false)}
                  href={`https://wa.me/0526353632?text=Hi, I would like to get a quote.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 bg-white text-yellow-500 font-bold rounded transition duration-200 hover:bg-yellow-500 hover:text-white"
                >
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
