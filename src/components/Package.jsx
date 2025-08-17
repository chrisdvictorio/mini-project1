import React from "react";

const Package = ({ item }) => {
  const statusConfig = {
    PENDING: { color: "bg-yellow-200", value: 10 },
    "LOADED TO CONTAINER": { color: "bg-yellow-200", value: 30 },
    "IN TRANSIT": { color: "bg-yellow-200", value: 50 },
    "IN CUSTOMS PROCESSING": { color: "bg-yellow-200", value: 60 },
    "HANDED TO TRUCKING SERVICES": { color: "bg-yellow-200", value: 75 },
    "OUT FOR DELIVERY": { color: "bg-yellow-200", value: 90 },

    ACCEPTED: { color: "bg-green-200", value: 20 },
    DELIVERED: { color: "bg-green-200", value: 100 },

    REJECTED: { color: "bg-red-200", value: 100 },
    "FAILED DELIVERY": { color: "bg-red-200", value: 100 },
    "PACKAGE LOST": { color: "bg-red-200", value: 100 },
  };

  const status = item.packageStatus?.statusName;
  const config = statusConfig[status] || { color: "bg-gray-200", value: 0 };

  const formatDate = (date) => {
    if (!date) return "N/A";
    return new Date(date).toLocaleString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="p-5 rounded-lg space-y-2 border border-gray-400 bg-gray-200 hover:bg-gray-300">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className={`px-3 rounded-full w-fit ${config.color}`}>
            <p className="text-sm font-semibold">{status}</p>
          </div>
          <p>Tracking Number: {item?.tracking_event_id}</p>
          <p>Package ID: {item.pkg?.packageId}</p>
          <p>Delivery Date</p>
          <p className="text-gray-500">{formatDate(item.pkg?.deliveryDate)}</p>
        </div>
        <img
          src="https://www.burnettandhillman.co.uk/wp-content/uploads/2024/09/package-150x150.png"
          alt="package"
          className="size-30"
        />
      </div>
      <div>
        <progress
          className="progress w-full h-4 text-[#2359F0]"
          value={config.value}
          max="100"
        ></progress>
      </div>
    </div>
  );
};

export default Package;
