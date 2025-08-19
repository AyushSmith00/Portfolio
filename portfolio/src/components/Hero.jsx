import React from 'react';
import "boxicons/css/boxicons.min.css";
import Spline from "@splinetool/react-spline";

function Hero() {
  return (
    <main id="hero" className='flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)] relative px-4'>
      <div 
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        className='max-w-xl z-10 mt-[50%] md:mt-[60%] lg:mt-0 lg:ml-[5%] text-white'
      >
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider mb-2'>
          Hey, I'm Ayush
        </h1>
        <h2 
          className='text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500'
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          Full-Stack Developer
        </h2>
        <p className='text-base sm-text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]'>
          I'm passionate about building robust and scalable web applications from the backend to the user interface.
        </p>

        
      </div>
      
      <Spline 
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-black"
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos-duration="3000" 
        className="absolute top-0 bottom-0 left-0 right-0 h-full w-full lg:left-[25%] lg:w-[75%]" 
        scene="https://prod.spline.design/jQoxVrT-MZ-eyzTp/scene.splinecode" 
      />
    </main>
  );
}

export default Hero;
