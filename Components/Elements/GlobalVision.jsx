import React from "react";

const GlobalVision = () => {
  return (
    <>
      <div className="container global-vision h-screen content-center">
        <div className="">
          <h2>GLOBAL VISION</h2>
          <p>
            With a remote culture, diversity is naturally in our dna. based
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
