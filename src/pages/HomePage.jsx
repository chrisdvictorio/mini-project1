import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";

const HomePage = () => {
  /*useEffect(() => {
    const fromApi = async () => {
      try {
        const data = await axios.get("");
        const response = await data.json();
        console.log(response);
        setIsLoading(true);
      } catch (error) {
        console.error(`Error from package detais: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
  }, []);
  */

  return (
    <section
      id="main"
      className="flex flex-col items-center justify-between px-4 sm:px-12 py-4 gap-8"
    >
      <div className="text-center space-y-4">
        <h2 className="text-4xl">What End-to-End Means for your Business</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col items-center text-center gap-4">
          <img src={logo1} alt="logo1" className="w-100" />
          <h3 className="text-2xl">What End-to-End Means for your Business</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-4">
          <img src={logo2} alt="logo2" className="w-100" />
          <h3 className="text-2xl">What End-to-End Means for your Business</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-4">
          <img src={logo3} alt="logo3" className="w-100" />
          <h3 className="text-2xl">What End-to-End Means for your Business</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
      <div className="flex space-x-4 md:space-x-20">
        <Link to={"/data"}>
          <button className="btn sm:btn-sm md:btn-md lg:btn-lg">
            View Data
          </button>
        </Link>

        <button className="btn sm:btn-sm md:btn-md lg:btn-lg">
          Responsive
        </button>
        <button className="btn sm:btn-sm md:btn-md lg:btn-lg">
          Responsive
        </button>
      </div>
    </section>
  );
};

export default HomePage;
