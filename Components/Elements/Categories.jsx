import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const Categories = () => {
  return (
    <>
      <div className="container">
        <div className="flex">
          <h5 className="font-bold pb-5">Our Categories</h5>
          <div className="icons">
            <AiOutlineLeft size={20} />
            <AiOutlineRight size={20} />
          </div>
        </div>
        <div className="max-w-[1300px] grid lg:grid-cols-4 md:grid-cols-2 gap-5 mx-auto">
          <div className="real-estate relative h-80 w-80">
            <h2 className="absolute inset-x-4 bottom-0 h-10 text-center">
              Real Estate
            </h2>
          </div>
          <div className="cars relative h-80 w-80">
            <h2 className="absolute inset-x-4 bottom-0 h-10 text-center">
              Cars
            </h2>
          </div>
          <div className="yachts relative h-80 w-80">
            <h2 className="absolute inset-x-4 bottom-0 h-10 text-center">
              yachts
            </h2>
          </div>
          <div className="watches relative h-80 w-80">
            <h2 className="absolute inset-x-4 bottom-0 h-10 text-center">
              Watches
            </h2>
          </div>
        </div>
        <div>
            <h3 className="text-center py-5">one platform for all premium listings unlimited potential </h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-5 mx-auto">
                <div className="flex flex-wrap items-center justify-center">
                    <img src="assets/ZIMO B.svg" alt="" width={300}/>
                    <h2>One Source Entry tickets</h2>
                    <p>For all Premium Listings</p>
                </div>
                <div className="col-span-2 mx-auto">
                    <img className="property" src="assets/Property 1821.jpg" alt="property" />
                    <h2 className="py-5 text-center">Let your dreams find you</h2>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
