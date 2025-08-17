import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const PackageById = () => {
  const statusColors = {
    PENDING: "bg-yellow-200",
    "LOADED TO CONTAINER": "bg-yellow-200",
    "IN TRANSIT": "bg-yellow-200",
    "IN CUSTOMS PROCESSING": "bg-yellow-200",
    "HANDED TO TRUCKING SERVICES": "bg-yellow-200",
    "OUT FOR DELIVERY": "bg-yellow-200",

    ACCEPTED: "bg-green-200",
    DELIVERED: "bg-green-200",

    REJECTED: "bg-red-200",
    "FAILED DELIVERY": "bg-red-200",
    "PACKAGE LOST": "bg-red-200",
  };

  const { id } = useParams();
  const {
    data: packageData,
    isLoading,
    error,
  } = useFetch(`http://localhost:8080/api/trackingEvents/${id}`, null);

  if (isLoading)
    return (
      <div className="flex justify-center mt-10">
        <span className="loading loading-bars loading-lg mt-[10rem]"></span>
      </div>
    );
  if (!packageData)
    return <p className="text-center mt-10">No package found.</p>;

  const formatDate = (date) => {
    if (!date) return "N/A";
    return new Date(date).toLocaleString();
  };

  if (error) {
    return (
      <div className="text-center text-red-500">Failed to load data...</div>
    );
  }

  const status = packageData?.packageStatus.statusName;
  const statusClass = statusColors[status] || "bg-gray-200";

  return (
    <div className="max-w-4xl mx-auto ">
      <div className="card shadow-lg rounded-2xl border border-gray-200 bg-white ">
        <div className="card-body space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Tracking #{packageData?.tracking_event_id}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {packageData?.description}
            </p>
            <div className="mt-3">
              <span className={`badge badge-outline ${statusClass}`}>
                {packageData?.packageStatus.statusName}
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-2 text-gray-700">
              Package Info
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                <p>
                  <strong>Package ID:</strong> {packageData?.pkg.packageId}
                </p>
                <p>
                  <strong>Weight:</strong> {packageData?.pkg.weight} kg
                </p>
                <p>
                  <strong>Type ID:</strong> {packageData?.pkg.packageTypeId}
                </p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                <p>
                  <strong>Pickup:</strong>{" "}
                  {formatDate(packageData?.pkg.pickUpDate)}
                </p>
                <p>
                  <strong>Delivery:</strong>{" "}
                  {formatDate(packageData?.pkg.deliveryDate)}
                </p>
                <p>
                  <strong>Created At:</strong>{" "}
                  {formatDate(packageData?.pkg.createdAt)}
                </p>
              </div>
            </div>
            <div className="mt-3 p-4 rounded-lg bg-gray-50 border border-gray-200 text-sm">
              <p>
                <strong>Contents:</strong>{" "}
                {packageData?.pkg.contentsDescription}
              </p>
              <p>
                <strong>Sender ID:</strong> {packageData?.pkg.senderId}
              </p>
              <p>
                <strong>Recipient ID:</strong> {packageData?.pkg.recipientId}
              </p>
              <p>
                <strong>Courier ID:</strong> {packageData?.pkg.courierId}
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-2 text-gray-700">Location</h3>
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 text-sm">
              <p>
                <strong>Location ID:</strong>{" "}
                {packageData?.location.location_id}
              </p>
              <p>
                <strong>City:</strong> {packageData?.location.city.name}
              </p>
              <p>
                <strong>City Address ID:</strong>{" "}
                {packageData?.location.city.address_id}
              </p>
              <p>
                <strong>Contact:</strong> {packageData?.location.contact_number}
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-2 text-gray-700">Metadata</h3>
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 text-sm">
              <p>
                <strong>Tracking Created:</strong>{" "}
                {formatDate(packageData?.created_at)}
              </p>
              <p>
                <strong>Last Updated:</strong>{" "}
                {formatDate(packageData?.updated_at)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageById;
