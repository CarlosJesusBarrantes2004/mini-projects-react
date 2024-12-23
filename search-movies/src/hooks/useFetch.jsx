import { useEffect } from "react";
import { useState } from "react";

const API_ENDPOINT = "https://www.omdbapi.com/?apikey=9b100b23";

const useFetch = (param) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);

  const fetchMovies = (url) => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.Response === "False") {
          setError(true);
        } else {
          setMovies(res.Search || res);
          setError(false);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${param}`);
  }, [param]);

  return { isLoading, error, movies };
};

export default useFetch;
