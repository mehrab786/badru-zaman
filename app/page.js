import React from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import OurServices from './components/OurServices';
import Map from './components/Map';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div className='flex flex-col'>
      
      <div>
        <Slider/>
      </div>

  <div>
    <OurServices/>
  </div>
  
  <div className=''>
    <Map/>
  </div>

 
      

    </div>
  );
};

export default Home;
