import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, {
          signal: controller.signal,
        });
        if (response.status === 200) {
          const result = await response.json();
          setData(result);
          setLoading(false);
        } else {
          setError(`Error: ${response.status} ${response.statusText}`);
        }
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
    return () => controller.abort();
  }, [url]);
  return { data, setData, error, loading };
};

export default useFetch;
