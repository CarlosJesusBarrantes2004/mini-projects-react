import { useEffect } from "react";
import { useState } from "react";

const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchApi = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setLoading(true);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchApi();
  }, [url]);

  return { loading, data };
};

export default useApi;
