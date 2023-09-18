import React from "react";
import picture from "../photos/pexels-erik-mclean-9890656.jpg";
import picture2 from "../photos/pexels-binyamin-mellish-186077.jpg";
import { Carousel } from "flowbite-react";
import ScrollAnimation from "../components/scrollAnimation/ScrollAnimation";

const About = () => {
  const list = [];
  return (
    <div>
      <ScrollAnimation />
      <div className="flex flex-col relative ">
        <div className="w-full">
          <img className="w-full h-[50vh] object-cover" src={picture} alt="" />
          <h1 className="text-center mt-8 font-extrabold text-3xl absolute top-11 left-1/2 transform -translate-x-1/2 text-white">
            CARAMELCREST PROPERTIES
          </h1>
        </div>
        <div className="flex mt-10 flex-col md:flex-row font-bold">
          <div>
            <h1 className="text-center">Our Mission</h1>
            <p className="text-lg font-semibold text-left my-4 mx-6 p-4 border border-gray-300 rounded-lg">
              Our mission at CaramelCrest Properties is driven by a fundamental
              belief in the transformative power of home. We understand that a
              home is not just a physical structure; it's a place where memories
              are made, dreams are realized, and lives are lived. We are deeply
              committed to fulfilling the dreams of individuals and families by
              providing them with the opportunity to purchase a place they can
              truly call their own.
              <br />
              <br />
              Our passion is at the heart of everything we do. We are not just
              in the business of buying and selling properties; we are in the
              business of facilitating life-changing moments. It brings us
              immense joy to guide our clients on their journey towards
              homeownership and to witness the excitement and satisfaction that
              comes with finding the perfect home.
              <br />
              <br />
              Thank you for considering CaramelCrest Properties as your trusted
              partner in your quest for the perfect home. Together, we'll make
              your homeownership dreams come true. Welcome to a world of
              possibilities, where finding your ideal home is our mission, and
              exceeding your expectations is our commitment.
            </p>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default About;
