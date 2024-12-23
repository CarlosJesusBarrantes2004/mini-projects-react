import { useState } from "react";
import { DataContext } from "./DataContext";
import useFetch from "../hooks/useFetch";

const DataProvider = ({ children }) => {
  const [query, setQuery] = useState("&s=superman");
  const { isLoading, error, movies } = useFetch(query);

  console.log(movies);

  return (
    <DataContext.Provider value={{ setQuery, isLoading, error, movies }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
