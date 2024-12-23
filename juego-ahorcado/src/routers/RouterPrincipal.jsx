import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import RouterSecundario from "./RouterSecundario";
import RutasPublicas from "./RutasPublicas";
import RutasPrivadas from "./RutasPrivadas";

const RouterPrincipal = () => {
  return (
    <>
      <Routes>
        <Route
          path="/home"
          element={
            <RutasPublicas>
              <Home></Home>
            </RutasPublicas>
          }
        ></Route>
        <Route
          path="/"
          element={
            <RutasPublicas>
              <Navigate to={"/home"}></Navigate>
            </RutasPublicas>
          }
        ></Route>
        <Route
          path="/*"
          element={
            <RutasPrivadas>
              <RouterSecundario></RouterSecundario>
            </RutasPrivadas>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default RouterPrincipal;
