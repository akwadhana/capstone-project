import React from 'react';
import picture from "../photos/pexels-erik-mclean-9890656.jpg";
import picture2 from "../photos/pexels-binyamin-mellish-186077.jpg"
import { Carousel } from 'flowbite-react';



const About = () => {
  return (
    <>
      <div className="flex flex-col md:flex-col">
        <div className='w-full'>
          <img
           className="w-full h-64 object-cover"
            src={picture}
            alt=""
          />
        </div>
        <div className='flex mt-36'>
            <h1>Our mission </h1>
            <img className="w-80" src={picture2}alt="" />
        </div>
      
      </div>
    </>
  );
}

export default About;