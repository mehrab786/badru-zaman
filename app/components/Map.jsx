"use client";
import React from "react";

const Map = () => {
  const coordinates = "24.186092,55.757705"; // Your office coordinates

  return (
    <div className="h-96 w-full mt-4 mb-4">
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d636.4718958739355!2d55.75782210729764!3d24.186038279975193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDExJzA5LjkiTiA1NcKwNDUnMjcuNyJF!5e1!3m2!1sen!2sae!4v1730079060057!5m2!1sen!2sae" 
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade=${coordinates}&zoom=15`}
        className="h-full w-full border-none"
        allowFullScreen
        title="Office Location"
      ></iframe>
    </div>
  );
};

export default Map;
