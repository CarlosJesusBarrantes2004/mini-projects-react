import { useEffect, useReducer, useState } from "react";
import Context from "./Context";
import types from "./Types";
import Preguntas from "./Preguntas";

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

const mezclarArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Provider = ({ children }) => {
  const [estado, controlarEstado] = useReducer(controlEstado, {}, init);
  const [numPregunta, setNumPregunta] = useState(0);
  const [error, setError] = useState(1);
  const [resultJuego, setResultJuego] = useState("");
  const [preguntas, setPreguntas] = useState([]);

  useEffect(() => {
    setPreguntas(mezclarArray([...Preguntas]));
  }, [resultJuego]);

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
        loguearse,
        desLoguearse,
        error,
        setError,
        preguntas,
        setPreguntas,
        numPregunta,
        setNumPregunta,
        resultJuego,
        setResultJuego,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
