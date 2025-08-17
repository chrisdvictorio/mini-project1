import React from "react";

const Navbar = ({ selectedStatus, setSelectedStatus }) => {
  const statuses = [
    "All",
    "Pending",
    "Accepted",
    "Rejected",
    "Loaded to Container",
    "In Transit",
    "In Customs Processing",
    "Handed to Trucking Services",
    "Out for Delivery",
    "Delivered",
    "Package Lost",
    "Failed Delivery",
  ];

  return (
    <nav>
      <ul className="flex flex-wrap items-center justify-center md:justify-between gap-2 text-sm">
        {statuses.map((status) => (
          <li
            key={status}
            className={`px-3 py-1 rounded-md border cursor-pointer border-gray-400  ${
              selectedStatus === status
                ? "bg-[#2359F0] text-white"
                : "bg-gray-200"
            } hover:bg-[#2359F0] hover:text-white`}
            onClick={() => setSelectedStatus(status)}
          >
            {status}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
