import { useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
  const [tareas, setTareas] = useState([]);

  return (
    <Context.Provider value={{ tareas, setTareas }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
