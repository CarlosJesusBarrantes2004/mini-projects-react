import { Navigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../context/Context";

const RutaPrincipal = ({ children }) => {
  const { estado } = useContext(Context);

  return !estado ? children : <Navigate to={"/juego"}></Navigate>;
};

export default RutaPrincipal;
