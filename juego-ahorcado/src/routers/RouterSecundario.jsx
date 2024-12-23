import { Routes, Route } from "react-router-dom";
import Juego from "../pages/Juego";
import FinJuego from "../pages/FinJuego";

const RouterSecundario = () => {
  return (
    <>
      <Routes>
        <Route path="/juego" element={<Juego></Juego>}></Route>
        <Route path="/finjuego" element={<FinJuego></FinJuego>}></Route>
      </Routes>
    </>
  );
};

export default RouterSecundario;
