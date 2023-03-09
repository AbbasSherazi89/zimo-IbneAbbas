import React from "react";
import Navbar from "../Layout/Navbar";
import { BiArrowBack } from "react-icons/bi";
const Hero = () => {
  return (
    <>
      <div className="container heroimage h-screen">
        {/* <Navbar /> */}
        <div className="py-3 flex text-center">
          <BiArrowBack size={20} className="mt-1" />
          Back
        </div>
        <div>
          Discover a new world for those who wish for more...
        </div>
      </div>
    </>
  );
};

export default Hero;
