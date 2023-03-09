import React from "react";

const WorldWide = () => {
  return (
    <>
      <div className="container h-screen py-5">
        <h4 className="text-center">
          A REAL ESTATE AND PROPERTY PLATFORM THAT IS CHANGING THE WORLD
        </h4>
        <div className="max-w-[1300px] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto">
          <div className="py-5 font-bold">
            A REVOLUTIONARY PLATFORM <br />
            <h3>ENTRIES - SELLERS </h3>
            <br /> <h2>WORLDWIDE</h2>
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
          <div>
            <h4 className="font-bold">The best of the best </h4>
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
