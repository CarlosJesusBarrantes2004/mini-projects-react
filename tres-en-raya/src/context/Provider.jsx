import { useState } from "react";
import Context from "./Context";
import { useReducer } from "react";
import types from "./Types";

const controlEstado = (state, action) => {
  switch (action.type) {
    case types.login:
      return { estado: true };
    case types.logout:
      return { estado: false };
    default:
      return state;
  }
};

const init = () => {
  return { estado: false };
};

const Provider = ({ children }) => {
  const [estado, controlarEstado] = useReducer(controlEstado, {}, init);
  const [jugadores, setJugadores] = useState({});
  const [gameOver, setGameOver] = useState("inicio");
  const [turno, setTurno] = useState(2);
  const [movimientos, setMovimientos] = useState(
    new Array(3).fill(new Array(3).fill(""))
  );

  const loguearse = () => {
    controlarEstado({ type: types.login });
  };

  const desLoguearse = () => {
    controlarEstado({ type: types.logout });
  };

  return (
    <Context.Provider
      value={{
        ...estado,
        controlarEstado,
        loguearse,
        desLoguearse,
        jugadores,
        setJugadores,
        turno,
        setTurno,
        movimientos,
        setMovimientos,
        gameOver,
        setGameOver,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
