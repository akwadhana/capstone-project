import React from "react";
import picture from "../photos/pexels-erik-mclean-9890656.jpg";
import picture2 from "../photos/pexels-binyamin-mellish-186077.jpg";
import { Carousel } from "flowbite-react";
import ScrollAnimation from "../components/scrollAnimation/ScrollAnimation";

const About = () => {
  const list = [];
  return (
    <div>
      {/* <ScrollAnimation /> */}
      <div className="flex flex-col relative ">
        <div className="w-full">
          <img className="w-full h-[50vh] object-cover" src={picture} alt="" />
          <h1 className="text-center mt-32 lg:mt-48 font-extrabold text-3xl absolute top-11 left-1/2 transform -translate-x-1/2 text-white">
            CARAMELCREST PROPERTIES
          </h1>
        </div>
        <div className="flex mt-10 flex-col md:flex-row lg:font-bold">
          <div>
            <h1 className="text-center font-bold">Our Mission</h1>
            <p className="lg:text-lg lg:font-semibold text-center my-5 mx-5 p-10 lg:my-8 lg:mx-10 lg:p-8 border border-gray-300 rounded-lg">
            CaramelCrest Properties is dedicated to the transformative power of home, recognizing it as more than just a physical structure but a place where memories are created. Their mission involves fulfilling the dreams of individuals and families by providing opportunities for them to purchase a place they can truly call their own. Beyond mere property transactions, CaramelCrest Properties is passionate about facilitating life-changing moments, guiding clients on their journey to homeownership, and witnessing the joy of finding the perfect home. They invite prospective homeowners to join them on a quest for the ideal home, emphasizing a commitment to exceeding expectations.
            </p>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default About;
