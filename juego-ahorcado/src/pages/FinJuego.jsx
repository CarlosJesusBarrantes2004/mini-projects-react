import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context/Context";

const FinJuego = () => {
  const { numPregunta, setNumPregunta, resultJuego, setResultJuego } =
    useContext(Context);
  const navigate = useNavigate();

  const reset = () => {
    navigate("/juego", { replace: true });
    setNumPregunta(0);
    setResultJuego("");
  };

  return (
    <div className="flex flex-col w-1/3">
      <h1 className="font-bold text-2xl text-center">
        {resultJuego === "ganaste" ? "Felicidades !" : "Perdiste"}
      </h1>
      <p className="text-base font-medium my-4">
        {resultJuego === "ganaste"
          ? "Lograste responder todas las preguntas"
          : `Respondiste : ${numPregunta}
        ${numPregunta === 1 ? " pregunta" : " preguntas"}`}
      </p>
      <button
        className="text-white bg-indigo-700 font-bold text-sm border-2 border-indigo-900 px-6 py-1 rounded-md text-center mx-auto w-1/2"
        onClick={reset}
      >
        Jugar de nuevo
      </button>
    </div>
  );
};

export default FinJuego;
