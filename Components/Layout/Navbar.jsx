import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-transparent px-2 sm:px-4 py-5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap items-center mx-auto">
          <a href="/" className="flex items-center">
            <img
              src="assets/ZIMO Menu Icon W.svg"
              className="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
          </a>
          <a href="/" className="flex items-left">
            <img
              src="assets/ZIMO W.png"
              className="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
          </a>
          <span className="text-left pt-4">About</span>
          <div className="flex md:order-2">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
