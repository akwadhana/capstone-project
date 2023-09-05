import React from "react";
import picture1 from "../photos/pexels-ilya-shakir-2440471.jpg";
import NavBar  from "../components/Navbar";
import picture2 from "../photos/pexels-curtis-adams-8031899.jpg"

const Home = () => {
  return (
    <div className="flex h-screen">
      {/* Left Side - Image */}
      <div className="w-1/2">
        <img
          src={picture1}
          alt="Home Image"
          className="object-cover w-full h-full"
        />
        
      </div>

      {/* Right Side - Navigation and Content */}
      <div className="w-1/2 flex flex-col bg-white">
        <div className="text-center mt-8">
          <h1 className="text-3xl font-bold">Welcome to Our Website</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;