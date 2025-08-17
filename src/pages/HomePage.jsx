import React from "react";
import { Link } from "react-router-dom";

import { GoPackage } from "react-icons/go";
import { LuTruck } from "react-icons/lu";
import { MdNumbers } from "react-icons/md";
import container from "../assets/container.png";

const HomePage = () => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col-reverse lg:flex-row gap-8">
        <div className="text-center md:text-start mw-full space-y-8">
          <h2 className="text-6xl font-medium">
            Welcome to our
            <br></br>Cargo Shipping{" "}
            <span className="text-[#2359F0]">Website</span>
          </h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip.
          </p>
          <button className="px-4 py-2 rounded-lg cursor-pointer text-white bg-[#2359F0] hover:bg-[#1c41a8]">
            Click Me!
          </button>
        </div>
        <div className="flex items-center justify-center w-full">
          <img src={container} alt="container" className="w-[26rem]" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full h-full gap-8">
        <Link to={"/data"}>
          <div className="flex-1 rounded-2xl p-6 space-y-4 shadow-md bg-gray-200 hover:bg-[#2359F0] hover:text-white">
            <div className="w-fit p-2 rounded-lg bg-white text-black">
              <GoPackage className="size-10" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Get-All-Packages</h3>
              <p className="font">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
            </div>
          </div>
        </Link>
        <Link to={"/data"}>
          <div className="flex-1 rounded-2xl p-6 space-y-4 shadow-md bg-gray-200 hover:bg-[#2359F0] hover:text-white">
            <div className="w-fit p-2 rounded-lg bg-white text-black">
              <LuTruck className="size-10" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Get-Package-By-Id</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
            </div>
          </div>
        </Link>
        <Link to={"/data/count"}>
          <div className="flex-1 rounded-2xl p-6 space-y-4 shadow-md bg-gray-200 hover:bg-[#2359F0] hover:text-white">
            <div className="w-fit p-2 rounded-lg bg-white text-black">
              <MdNumbers className="size-10" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Get-Status-Count</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
