import React from "react";

import package1 from "../assets/try.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  const packages = [
    { packageId: 1, status: "Pending" },
    { packageId: 2, status: "Accepted" },
    { packageId: 3, status: "Rejected" },
    { packageId: 4, status: "Loaded to Container" },
    { packageId: 5, status: "In Transit" },
    { packageId: 6, status: "In Customs Processing" },
    { packageId: 7, status: "Handed to Trucking Services" },
    { packageId: 8, status: "Out for Delivery" },
    { packageId: 9, status: "Delivered" },
    { packageId: 10, status: "Package Lost" },
    { packageId: 11, status: "Failed Delivery" },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 py-4 sm:px-8 lg:px-12">
      {packages.map((item) => (
        <Link to={`/data/${item.packageId}`}>
          <div className="flex flex-col rounded-lg p-4 h-53 gap-8 border border-[#EAECED] bg-[#F3F5F9]">
            <div className="flex items-center justify-between h-full">
              <div className="flex flex-col items-start gap-4">
                <div className="px-4 rounded-full bg-red-100 relative">
                  <p>{item.status}</p>
                </div>
                <p>#PACKAGEID: {item.packageId}</p>
                <div>
                  <p className="font-light text-[#686C6F]">Delivery date</p>
                  <p>test</p>
                </div>
              </div>
              <img
                src="https://www.burnettandhillman.co.uk/wp-content/uploads/2024/09/package-150x150.png"
                alt="package"
                className="size-30"
              />
            </div>
            <progress
              className="progress progress-primary w-full h-full rounded-full"
              value={20}
              max="100"
            ></progress>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default HomePage;
