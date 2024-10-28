"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const address = "5QP5+C34 Bin Brook Plastic Industries - 008 - Industrial Area - Leetag - أبو ظبي";
  const contactNumber = "0526353632"; // WhatsApp contact number

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row justify-between">
          {/* Company Info */}
          <div className="text-center md:text-left mb-4">
            <h2 className="text-xl font-bold">Badru Zaman Transport</h2>
            <p className="text-sm">{address}</p>
          </div>

          {/* Get Quote Button */}
          <div className="flex justify-center">
            <Link
              href={`https://wa.me/${contactNumber}?text=Hi, I would like to get a quote.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-black font-bold py-2 px-4 rounded transition duration-200 hover:bg-yellow-600"
            >
              Get Quote
            </Link>
          </div>
        </div>

        {/* Additional Links (if needed) */}
        <div className="mt-4 text-center">
          <ul className="flex flex-col md:flex-row justify-center gap-4 text-sm">
            <li>
              <Link href="/about" className="hover:text-yellow-500">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-500">Contact Us</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-yellow-500">Services</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm mt-4">
        <p>&copy; {new Date().getFullYear()} Badru Zaman Transport. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
