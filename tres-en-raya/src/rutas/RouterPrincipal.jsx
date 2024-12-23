import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Scores from "../pages/Scores";
import RouterSecundario from "../rutas/RouterSecundario";
import RutasPublicas from "../rutas/RutasPublicas";
import RutasPrivadas from "../rutas/RutasPrivadas";

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
          path="/scores"
          element={
            <RutasPublicas>
              <Scores></Scores>
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
      <Outlet></Outlet>
    </>
  );
};

export default RouterPrincipal;
