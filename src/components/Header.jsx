import React from "react";

import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 py-6 px-8 md:px-36 flex items-center justify-between z-50 bg-white text-black">
      <Link to={"/"}>
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="size-8" />
          <p className="text-lg font-semibold">Cargo Shipping</p>
        </div>
      </Link>
      <ul className="flex items-center gap-4">
        <Link to={"/data"}>
          <li className="px-4 py-1 rounded-lg border border-[#2359F0] hover:bg-gray-200">
            Packages
          </li>
        </Link>
        <Link to={"/data/count"}>
          <li className="px-4 py-1 rounded-lg bg-[#2359F0] hover:bg-[#1c41a8] text-white ">
            Status Count
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
