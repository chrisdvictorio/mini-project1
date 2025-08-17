import React from "react";

import error from "../assets/error.png";

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="w-1/2 space-y-8">
        <h2 className="text-6xl font-medium text-[#2359F0]">Page Not Found</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip.
        </p>
        <Link to={"/"}>
          <button className="px-4 py-2 rounded-lg cursor-pointer text-white bg-[#2359F0] hover:bg-[#1c41a8]">
            Back to Home
          </button>
        </Link>
      </div>
      <img src={error} alt="error-icon" className="w-1/3" />
    </div>
  );
};

export default ErrorPage;
