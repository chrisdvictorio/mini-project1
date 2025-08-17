import React, { useState, useEffect } from "react";

import package1 from "../assets/try.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import Package from "../components/Package";

const PackageDetail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [packages, setPackages] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "http://localhost:8080/api/trackingEvents"
        );
        const data = await response.data;
        console.log(data);
        setPackages(data);
      } catch (error) {
        console.error(`Error: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const searchFiltered = packages.filter((item) => {
    return (
      item.tracking_event_id?.toString().toLowerCase().includes(search.toLowerCase()) ||
      item.pkg?.packageId.toString().toLowerCase().includes(search.toLowerCase()) ||
      item.packageStatus?.statusName.toLowerCase().includes(search.toLowerCase()) ||
      item.pkg?.deliveryDate.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <>
      <Navbar />
      <div className="flex justify-end mr-[5rem]">
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search package"
        />
      </div>
      <section
        id="package-detail"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 py-4 sm:px-8 lg:px-12"
      >
        {isLoading ? (
          <span className="loading loading-bars loading-xl mt-[10rem]"></span>
        ) : searchFiltered.length > 0 ? (
          searchFiltered.map((item) => (
            <Link
              key={item.tracking_event_id}
              to={`/data/${item.tracking_event_id}`}
            >
              <Package item={item} />
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No results found.
          </p>
        )}
      </section>
    </>
  );
};

export default PackageDetail;
