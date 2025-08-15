import React from "react";

const Package = ({ item }) => {
  return (
    <div
      className="flex flex-col rounded-lg p-4 h-53 gap-8 border border-[#EAECED] bg-[#F3F5F9] hover:bg-gray-200"
      id="package"
    >
      <div className="flex items-center justify-between h-full">
        <div className="flex flex-col items-start gap-4">
          <div className="px-4 rounded-full bg-red-100 relative">
            <p>{item.packageStatus?.statusName}</p>
          </div>
          <p>Package: {item.pkg?.packageId}</p>
          <div>
            <p className="font-light text-[#686C6F]">Delivery date</p>
            <p>{item.pkg?.deliveryDate}</p>
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
        value={50}
        max="100"
      ></progress>
    </div>
  );
};

export default Package;
