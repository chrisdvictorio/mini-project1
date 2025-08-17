import React, { useState, useEffect } from "react";
import axios from "axios";
import useFetch from "../hooks/useFetch";

const categories = [
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

const Navbar = () => {
  const [selectedStatus, setSelectedStatus] = useState("Pending");
  const [filteredPackages, setFilteredPackages] = useState([]);
  const { data: allPackages, isLoading, error } = useFetch("http://localhost:8080/api/trackingEvents", []);

  useEffect(() => {
    if (allPackages.length > 0) {
      const filtered = allPackages.filter(
        (pkg) =>
          pkg.packageStatus &&
          pkg.packageStatus.statusName.toLowerCase() ===
            selectedStatus.toLowerCase()
      );

      setFilteredPackages(filtered);
    }
  }, [selectedStatus, allPackages]);

  return (
    <div>
      <nav className="px-4 sm:px-12 py-4 mt-14 shadow-md overflow-x-auto">
        <ul className="flex flex-nowrap gap-3">
          {categories.map((status, index) => (
            <li
              key={index}
              onClick={() => setSelectedStatus(status)}
              className={`cursor-pointer rounded-full px-4 py-1 transition 
                ${
                  selectedStatus === status
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-100"
                }`}
            >
              {status}
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          <p className="col-span-full text-center text-gray-500">Loading...</p>
        ) : filteredPackages.length > 0 ? (
          filteredPackages.map((pkg) => (
            <div
              key={pkg.tracking_event_id}
              className="card bg-white shadow rounded-lg p-4"
            >
              <h2 className="font-semibold">
                #{pkg.tracking_event_id} - {pkg.packageStatus.statusName}
              </h2>
              <p className="text-sm text-gray-600">{pkg.description}</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No packages found for "{selectedStatus}"
          </p>
        )}
      </div>
    </div>
  );
};

export default Navbar;
