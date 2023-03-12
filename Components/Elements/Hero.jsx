import React from "react";
import { BiArrowBack } from "react-icons/bi";
const Hero = () => {
  return (
    <>
      <div className="md:container max-w-full sm:max-w-full flex items-center px-5 mx-auto heroimage h-screen py-8">
        <div className="grid lg:grid-cols-1 ">
          <div>
            <button className="flex">
              <BiArrowBack size={20} className="mt-1 mr-3" />
              Back <br />
            </button>
          </div>
          <div>
            <h3 className="text-3xl uppercase"> Discover</h3>
            <h1 className="text-5xl uppercase py-3">a new world</h1>
            <h5 className="uppercase text-gray-500">
              for those who wish for more...
            </h5>
          </div>
        </div>
        {/* <span className="justify-end">
           Bringing the world closer together 
        </span> */}
      </div>
    </>
  );
};

export default Hero;
