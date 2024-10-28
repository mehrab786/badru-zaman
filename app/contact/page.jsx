"use client";
import React from "react";
import Map from "../components/Map"; // Import the Map component you created earlier
import Link from "next/link";

const Contact = () => {
  const address = "5QP5+C34 Bin Brook Plastic Industries - 008 - Industrial Area - Leetag - أبو ظبي";
  const contactNumber = "0526353632"; // WhatsApp contact number

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg mb-4 text-center">
        We would love to hear from you! For inquiries or quotes, please contact us using the information below.
      </p>

      {/* Address Section */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold">Our Address</h2>
        <p className="text-sm">{address}</p>
      </div>

      {/* Google Map Component */}
      <Map/>

      {/* Get Quote Button */}
      <div className="mt-8">
        <Link
          href={`https://wa.me/${contactNumber}?text=Hi, I would like to get a quote.`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 text-black font-bold py-2 px-6   rounded transition duration-200 hover:bg-yellow-600
                     lg:px-8 xl:px-10 2xl:px-12"
        >
          Get Quote
        </Link>
      </div>
    </div>
  );
};

export default Contact;
