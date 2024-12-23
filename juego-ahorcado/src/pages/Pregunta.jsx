import { useContext } from "react";
import Context from "../context/Context";

const Pregunta = ({ posiciones }) => {
  const { preguntas, numPregunta } = useContext(Context);

  return (
    <div className="flex flex-col justify-center py-4">
      <p className="text-center font-semibold">
        {preguntas[numPregunta].pregunta}
      </p>
      <div className="flex justify-center flex-wrap">
        {preguntas[numPregunta].respuesta.split("").map((l, index) => (
          <div
            key={index}
            className="border-b w-10 h-10 m-2 border-dashed border-black flex items-center justify-center"
          >
            <span className="font-bold">
              {posiciones.includes(index) ? l : ""}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pregunta;
