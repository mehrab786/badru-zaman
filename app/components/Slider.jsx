"use client";
import { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Image paths (from the public folder)
const images = [
  { src: "/truck.png", alt: "Truck" },
  { src: "/crane.png", alt: "Crane" },
  { src: "/Lowbed.png", alt: "Lowbed" },
  { src: "/crane2.png", alt: "Crane 2" },
  { src: "/crane3.png", alt: "Crane 3" },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full  mx-auto ">
      {/* Slider Image */}
      <div className="relative h-48 md:h-72 lg:h-96">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          layout="fill"
          objectFit="cover"
          className=" shadow-lg"
        />
      </div>

      {/* Navigation Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2  text-white rounded-full"
      >
        <FiChevronLeft size={50} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 text-white rounded-full"
      >
        <FiChevronRight size={50} />
      </button>

      {/* Image Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-yellow-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
