import Context from "./Context";
import { useState } from "react";

const Provider = ({ children }) => {
  const [libros, setLibros] = useState([]);

  return (
    <Context.Provider value={{ libros, setLibros }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
