import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 w-full px-4 py-4 sm:px-12 sm:py-6 bg-[#0F172A] text-white z-50">
      <Link to={"/"}>
        <h2>Header</h2>
      </Link>
    </header>
  );
};

export default Header;
