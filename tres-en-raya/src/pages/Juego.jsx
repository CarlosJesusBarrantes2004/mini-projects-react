import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cuadro from "./Cuadro";
import Context from "../context/Context";

const Juego = () => {
  const { turno, setTurno, movimientos, setGameOver } = useContext(Context);
  const navigate = useNavigate();

  const comprobarFilas = () => {
    for (let i = 0; i < movimientos.length; i++) {
      if (
        movimientos[i][0] !== "" &&
        movimientos[i][0] === movimientos[i][1] &&
        movimientos[i][1] === movimientos[i][2]
      ) {
        return true;
      }
    }
    return false;
  };

  const comprobarColumnas = () => {
    for (let j = 0; j < movimientos.length; j++) {
      if (
        movimientos[0][j] !== "" &&
        movimientos[0][j] === movimientos[1][j] &&
        movimientos[1][j] === movimientos[2][j]
      ) {
        return true;
      }
    }
    return false;
  };

  const comprobarDiagonales = () => {
    if (
      movimientos[0][0] !== "" &&
      movimientos[0][0] === movimientos[1][1] &&
      movimientos[1][1] === movimientos[2][2]
    ) {
      return true;
    } else if (
      movimientos[0][2] !== "" &&
      movimientos[0][2] === movimientos[1][1] &&
      movimientos[1][1] === movimientos[2][0]
    ) {
      return true;
    }
    return false;
  };

  const ganoAlguien = () => {
    return comprobarFilas() || comprobarColumnas() || comprobarDiagonales();
  };

  const esEmpate = () => {
    return (
      movimientos.every((fila) => fila.every((celda) => celda !== "")) &&
      !ganoAlguien()
    );
  };

  useEffect(() => {
    if (esEmpate()) {
      setGameOver("empate");
      navigate("/finjuego", { replace: true });
    } else if (ganoAlguien()) {
      setGameOver("gano");
      navigate("/finjuego", { replace: true });
    } else {
      turno === 1 ? setTurno(2) : setTurno(1);
    }
  }, [movimientos]);

  return (
    <div className="mt-4 flex justify-center">
      <div className="grid grid-cols-3 grid-rows-3">
        <Cuadro fila={0} columna={0}></Cuadro>
        <Cuadro fila={0} columna={1}></Cuadro>
        <Cuadro fila={0} columna={2}></Cuadro>
        <Cuadro fila={1} columna={0}></Cuadro>
        <Cuadro fila={1} columna={1}></Cuadro>
        <Cuadro fila={1} columna={2}></Cuadro>
        <Cuadro fila={2} columna={0}></Cuadro>
        <Cuadro fila={2} columna={1}></Cuadro>
        <Cuadro fila={2} columna={2}></Cuadro>
      </div>
    </div>
  );
};

export default Juego;
