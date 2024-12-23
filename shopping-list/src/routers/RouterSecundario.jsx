import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Productos from "../components/Productos";
import Compras from "../components/Compras";

const RouterSecundario = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/productos" element={<Productos></Productos>}></Route>
        <Route path="/compras" element={<Compras></Compras>}></Route>
      </Routes>
    </>
  );
};

export default RouterSecundario;
