import React from "react";

const WorldWide = () => {
  return (
    <>
      <div className="md:container lg:max-w-[1600px] md:max-w-[1300px] px-5 mx-auto h-auto py-8">
        <h4 className="text-center uppercase">
          A REAL ESTATE AND PROPERTY PLATFORM THAT IS CHANGING THE WORLD
        </h4>
        <div className="grid lg:grid-cols-3 mx-auto">
          <div className="py-5">
            <h5>A REVOLUTIONARY PLATFORM</h5>
            <h3 className="text-xl">ENTRIES - SELLERS </h3>
             <h2 className="text-3xl">WORLDWIDE</h2>
          </div>
          <div />
          <div />
          <div className="col-start-3 flex flex-wrap items-center justify-center">
            <img src="assets/ZIMO ZIG B.svg" alt="zimo" width={250} />
            <h4 className="text-center pt-5">
              CONNECTING USERS FROM ACROSS THE GLOBE TO FACILITATE LIFE'S MOST
              IMPORTATN PERSONAL TRANSACTIONS
            </h4>
          </div>
          <div className="col-start-1">
            <h4 className="text-3xl">The best of the best </h4>
            <h4>
              A combination of automation and manual curation our pro agents and
              moderation team selects the highest quality listing on the market
              from across the world.
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorldWide;
