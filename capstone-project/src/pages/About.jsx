import React from 'react';
import picture from "../photos/pexels-erik-mclean-9890656.jpg";
import picture2 from "../photos/pexels-binyamin-mellish-186077.jpg"
import { Carousel } from 'flowbite-react';

const About = () => {
  return (
    <>
      <div className="flex flex-col md:flex-col relative ">
        <div className='w-full'>
          <img
           className="w-full h-72 object-cover"
            src={picture}
            alt=""
          />
        </div>
        <h1 className='text-center mt-8 font-extrabold text-3xl absolute top-11 left-1/2 transform -translate-x-1/2 text-white'>ABOUT US</h1>
        <div className='flex mt-10 font-bold'>
          <div>
            <h1 className='ml-8 text-center '> CaramelCrest Properties</h1>
            <p className='text-lg font-semibold text-left my-4 mx-6 p-4 border border-gray-300 rounded-lg'>
              At CaramelCrest Properties, we specialize in making your dream home a reality. We understand that buying a house is not just a transaction; it's an emotional journey, and we are here to guide you every step of the way.
            </p>
          </div>
          <div>
            <h1 className='text-center'>Our Mission</h1>
            <p className='text-lg font-semibold text-left my-4 mx-6 p-4 border border-gray-300 rounded-lg'>Our mission is simple: to render houses for those who want to buy. We are passionate about helping individuals and families find their perfect homes, and we take pride in delivering exceptional real estate services that exceed your expectations.</p>
          </div>
          <p></p>
        </div>
      </div>
    </>
  );
}

export default About;