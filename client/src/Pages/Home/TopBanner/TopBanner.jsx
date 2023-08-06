import React from "react";
import img from "../../../assets/home_banner.png";
const TopBanner = () => {
  return (
    <section className="bg-gray-100 text-gray-800 ">
      <div className=" flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between max-w-screen-xl">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:w-1/2 xl:w-1/2 w-full 2xl:w-1/2">
          <img
            src={img}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:w-1/2 xl:w-1/2 w-full lg:text-left">
          <h1 className="text-5xl font-bold leading sm:text-6xl">
            Empowering Your Ideas,
            <span className="text-green-600"> Organizing </span>Your World!
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Welcome to Interactive Note, your ultimate note organizer app
            designed
            <br className="hidden md:inline lg:hidden" /> to streamline your
            life and boost your productivity.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded bg-green-600 hover:bg-green-700 text-gray-50"
            >
              Take a note
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold border rounded hover:bg-green-700 hover:text-white border-gray-800"
            >
              My notes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBanner;
