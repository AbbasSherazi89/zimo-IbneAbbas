import React from "react";

const GlobalVision = () => {
  return (
    <>
      <div className="md:container lg:max-w-[1600px] md:max-w-[1300px] global-vision flex items-center justify-center  h-screen">
        <div className="uppercase text-center">
          <h2 className="text-3xl pb-4">GLOBAL VISION</h2>
          <p className="text-xl">
            With a remote culture, diversity is naturally in our dna. <br/> based
            across the globe, making up over 23 different nationalities.
          </p>
        </div>
      </div>
      <div className="container grid lg:grid-cols-5 py-5 content-center h-screen">
        <div >
            <img src="assets/ZIMO B.svg" alt="" />
            <h2 className="pt-5 text-center">Partners</h2>
        </div>
        <div/>
        <div>
            <img src="assets/CIVICA CES B.svg" alt="" />
            <img src="assets/Barclays.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default GlobalVision;
