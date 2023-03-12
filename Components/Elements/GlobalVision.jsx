import React from "react";

const GlobalVision = () => {
  return (
    <>
      <div className="md:container lg:max-w-[1600px] md:max-w-[1300px] global-vision flex items-center justify-center h-screen">
        <div className="uppercase text-center">
          <h2 className="text-2xl pb-[40px]">GLOBAL VISION</h2>
          <p className="text-sm tracking-widest">
            With a remote culture, diversity is naturally in our dna. <br/> based
            across the globe, making up over 23 different nationalities.
          </p>
        </div>
      </div>
      <div className="md:container grid lg:grid-cols-4 py-[200px]">
        <div className="flex flex-col justify-center items-center">
            <img src="assets/ZIMO B.svg" alt="" width={200}/>
            <h2 className="text-center text-3xl uppercase text-gray-500">Partners</h2>
        </div>
        <div className="flex flex-col justify-center items-center pt-5">
            <img src="assets/Civic-group.png" alt="" width={200}/>
        </div>
        <div/>
      </div>
    </>
  );
};

export default GlobalVision;
