import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import Package from "../components/Package";
import useFetch from "../hooks/useFetch";

import Navbar from "../components/Navbar";

const PackageDetail = () => {
  const { data, isLoading, error } = useFetch(
    "http://localhost:8080/api/trackingEvents",
    []
  );

  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredData = data.filter((item) => {
    const statusMatch =
      selectedStatus === "All" ||
      item.packageStatus?.statusName === selectedStatus.toUpperCase();

    const searchMatch =
      item.tracking_event_id
        ?.toString()
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.pkg?.packageId
        .toString()
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.packageStatus?.statusName
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.pkg?.deliveryDate.toLowerCase().includes(search.toLowerCase());

    return statusMatch && searchMatch;
  });

  if (error) {
    return (
      <div className="text-center text-red-500">Failed to load data...</div>
    );
  }

  return (
    <div className="flex flex-col space-y-8">
      <Navbar
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />
      <div className="flex items-center justify-center gap-4">
        <FaSearch className="size-6 text-[#2359F0]" />
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search package"
          className="border rounded-lg px-2 py-1 w-96 border-gray-400"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {isLoading ? (
          <span className="loading loading-bars loading-xl mt-[10rem]"></span>
        ) : filteredData.length > 0 ? (
          filteredData.map((item) => (
            <Link
              key={item.tracking_event_id}
              to={`/data/${item.tracking_event_id}`}
            >
              <Package item={item} />
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-xl text-gray-500">
            No package found.
          </p>
        )}
      </div>
    </div>
  );
};

export default PackageDetail;
