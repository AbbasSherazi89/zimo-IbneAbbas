import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
const CustomNav = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <nav className="w-full fixed top-0 left-0 right-0">
        <div className="justify-between px-5 mx-auto lg:max-w-9xl md:items-center md:flex md:px-12">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div className="flex">
                <a href="/">
                  <img
                    src="assets/ZIMO Menu Icon W.svg"
                    alt="menu icon"
                    width={40}
                  />
                </a>
                <a className="px-5" href="/">
                  <img src="assets/ZIMO W.png" alt=" zimo logo" width={100} />
                </a>
                <h3 className="text-white pt-2">About</h3>
                {/* <a className="ml-[450px]" href="/">
                  <img src="assets/ZIMO ZIG W.png" alt="" width={70}/>
                </a> */}
              </div>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <AiOutlineClose size={30} color={'white'}/>
                  ) : (
                    <GiHamburgerMenu size={30} color={'white'}/>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-2 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <div className="flex">
                <a href="/" onClick={()=>setNavbar(!navbar)}>
                  <img src="assets/Top-img.png" alt="Top image" width={400} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default CustomNav;
