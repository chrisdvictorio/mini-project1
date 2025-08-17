import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url, initialValue) => {
  const [data, setData] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url);
        console.log("Fetching: ", response.data);
        setData(response.data);
      } catch (error) {
        setError(error);
        console.error(`Error fetching: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetch;
