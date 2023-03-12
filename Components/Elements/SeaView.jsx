import React from "react";
import { BsArrowRight } from "react-icons/bs";
const SeaView = () => {
  return (
    <>
      <div className="md:container lg:max-w-[1600px] md:max-w-[1300px] h-screen sea-view py-5">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 flex justify-center items-center">
          <div className=" flex flex-col justify-center">
            <img src="assets/ZIMO ZIG W.png" alt="" width={300} />
          </div>
          <div></div>
          <div></div>
          <div className="flex flex-col py-5">
            <h2 className="text-2xl py-5 uppercase">PERSONALISED FOR YOU</h2>
            <p className="uppercase text-sm">
              Delivering Thousands of personalised alerts Everday our users can
              be first in line when that oppurtunity of a lifetime is here.
            </p>
            <div className="flex justify-end lg:pt-[150px] py-4">
              <p className="uppercase ">Create user id</p>
              <BsArrowRight className="mt-0 ml-4" size={25} />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default SeaView;
