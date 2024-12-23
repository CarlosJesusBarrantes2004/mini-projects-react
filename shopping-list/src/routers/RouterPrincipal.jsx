import { Routes, Route, Navigate } from "react-router-dom";
import Index from "../components/Index";
import Registrar from "../components/Registrar";
import Login from "../components/Login";
import RouterSecundario from "./RouterSecundario";

const RouterPrincipal = () => {
  return (
    <>
      <Routes>
        <Route path="/index" element={<Index></Index>}></Route>
        <Route path="/" element={<Navigate to={"/index"}></Navigate>}></Route>
        <Route path="/registrarse" element={<Registrar></Registrar>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/*"
          element={<RouterSecundario></RouterSecundario>}
        ></Route>
      </Routes>
    </>
  );
};

export default RouterPrincipal;
