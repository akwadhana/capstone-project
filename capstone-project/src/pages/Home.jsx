import React from "react";
import picture1 from "../photos/pexels-ilya-shakir-2440471.jpg";
import NavBar from "../components/Navbar";
import picture2 from "../photos/pexels-curtis-adams-8031899.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row md:h-screen">
      {/* Left Side - Image */}
      <div className="md:w-1/2">
        <img
          src={picture1}
          alt="Home Image"
          className="object-cover w-full h-[45vh]  md:mt-0 md:h-full"
        />
      </div>

      {/* Right Side - Navigation and Content */}
      <div className="md:w-1/2 flex flex-col md:self-center bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold px-8">
            Welcome to CaramelCrest Properties
          </h1>
          <p className="mt-4 px-8 md:px-14">
            Step into the world of [Your Real Estate Agency], where we transform
            your real estate aspirations into tangible results. Whether you're
            in the market to buy, sell, or invest, our seasoned experts are at
            your side, offering unwavering support throughout your journey.
            Discover our curated collection of Your City's finest properties
            and unlock the ideal place to make your own."
          </p>
        </div>
        <div style={{ backgroundColor: "rgb(43, 21, 21)" }} className="bg-black w-52 lg:w-72 text-white lg:self-center lg:mt-8 rounded-md p-4 self-center ">
          <Link to="/property">
            {" "}
            <button className="">Check out more of our properties </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
