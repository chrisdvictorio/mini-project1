import React, { useState, useEffect } from "react";
import axios from "axios";

const PackageById = ({ item }) => {
  const [packageId, setPackageId] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (item) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/trackingEvents/${item.tracking_event_id}`
      );
      const data = await response.data;
      console.log(data);
      // setIsLoading(true);
      setPackageId(data);
    } catch (error) {
      console.error(`Error: ${error}`);
    } finally {
      // setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-between px-4 sm:px-12 py-16 gap-8 mt-14"
      id="packag-by-id"
    >
      {/* <h3>Sender: {packageId.description}</h3> */}
    </div>
  );
};

export default PackageById;
