import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const Categories = () => {
  return (
    <>
      <div className="md:container lg:max-w-[1600px] md:max-w-[1300px] items-center px-5 mx-auto">
        <div className="flex flex-">
          <h5 className="font-bold pb-5">Our Categories</h5>
          <div className="icons">
            <AiOutlineLeft size={25} />
            <AiOutlineRight size={25} />
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:justify-center gap-5 mx-auto">
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
        <div className="pt-5">
            <h3 className="text-center py-5 uppercase text-3xl">one platform for all premium listings <br/>  </h3>
            <h4 className="text-center uppercase text-xl">unlimited potential</h4>
            <div className="grid lg:grid-cols-3 md:grid-cols-1 py-5 mx-auto">
                <div className="flex flex-col justify-center py-3">
                    <img src="assets/ZIMO B.svg" alt="" width={300}/>
                    <h2 className="uppercase pt-5">One Source <br/> <span className="text-3xl"> Entry tickets <br/></span> <span className="text-sm">For all Premium Listings</span></h2>
                </div>
                <div className="col-span-2 mx-auto">
                    <img className="property" src="assets/Property 1821.jpg" alt="property" />
                    <h2 className="py-5 text-center uppercase">Let your dreams find you</h2>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
