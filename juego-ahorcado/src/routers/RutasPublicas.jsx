import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Context from "../context/Context";

const RutasPublicas = ({ children }) => {
  const { estado } = useContext(Context);

  return !estado ? children : <Navigate to={"/juego"}></Navigate>;
};

export default RutasPublicas;
