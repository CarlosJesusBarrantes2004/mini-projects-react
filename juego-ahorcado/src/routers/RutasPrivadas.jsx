import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Context from "../context/Context";

const RutasPrivadas = ({ children }) => {
  const { estado } = useContext(Context);

  return estado ? children : <Navigate to={"/home"}></Navigate>;
};

export default RutasPrivadas;
