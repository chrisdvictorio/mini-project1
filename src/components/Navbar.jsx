import React from "react";

const Navbar = () => {
  const categories = [
    { status: "Pending" },
    { status: "Accepted" },
    { status: "Rejected" },
    { status: "Loaded to Container" },
    { status: "In Transit" },
    { status: "In Customs Processing" },
    { status: "Handed to Trucking Services" },
    { status: "Out for Delivery" },
    { status: "Delivered" },
    { status: "Package Lost" },
    { status: "Failed Delivery" },
  ];

  return (
    <nav className="px-4 sm:px-12 py-4 mt-14 sm:mt-18 shadow-md">
      <ul className="flex flex-wrap justify-between">
        {categories.map((category) => (
          <li className="bg-red-50 rounded-full px-4 py-1">
            {category.status}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
