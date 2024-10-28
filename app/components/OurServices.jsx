"use client";
import Image from "next/image";

const services = [
  {
    title: "Truck Services",
    description:
      "Our truck services provide safe and efficient transportation for various goods and materials. With a fleet of modern trucks, we ensure timely deliveries across multiple locations. Whether it's local or long-distance transportation, we handle your cargo with care, ensuring it arrives in perfect condition. Our experienced drivers are trained to manage diverse logistics challenges, guaranteeing reliability and professionalism.",
    imgSrc: "/truck.png",
  },
  {
    title: "50 Ton Capacity Mobile Crane",
    description:
      "This versatile mobile crane has a lifting capacity of 50 tons, making it ideal for construction sites and industrial applications. Equipped with advanced technology and safety features, our mobile crane can navigate tight spaces and lift heavy loads with precision. It is perfect for projects that require mobility and flexibility, ensuring that heavy materials can be moved efficiently wherever they are needed.",
    imgSrc: "/crane.png",
  },
  {
    title: "100 Ton Capacity Crane",
    description:
      "Our 100-ton capacity crane is designed for large-scale industrial projects that require heavy lifting. It combines strength and stability, allowing for the safe handling of substantial loads in various environments, from construction sites to manufacturing facilities. This crane is operated by skilled professionals who ensure adherence to safety standards, making it a reliable choice for your heavy lifting needs.",
    imgSrc: "/crane2.png",
  },
  {
    title: "500 Ton Capacity Crane",
    description:
      "For the most demanding lifting tasks, our 500-ton crane is the ultimate solution. Capable of lifting extremely heavy machinery and materials, this crane is utilized in large-scale industrial operations and infrastructure projects. Its robust design and advanced features allow for safe operations even under challenging conditions. Our experienced team guarantees that all lifts are executed smoothly and securely.",
    imgSrc: "/crane3.png",
  },
  {
    title: "Lowbed for Heavy Load Transportation",
    description:
      "Our lowbed trailers are specifically designed for transporting oversized and heavy loads, including construction equipment and machinery. With a low-profile design, these trailers provide maximum stability and safety during transit. We ensure that all loads are securely fastened and handled by trained professionals. Trust us to deliver your equipment safely and efficiently.",
    imgSrc: "/Lowbed.png",
  },
];

const contactNumber = "0526353632"; // WhatsApp contact number

const OurServices = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-center text-3xl font-bold mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-full h-48">
              <Image
                src={service.imgSrc}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href={`https://wa.me/${contactNumber}?text=Hi, I would like to get a quote for ${service.title}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 transition duration-200"
              >
                Get Quotes
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
