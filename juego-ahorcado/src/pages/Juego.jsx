import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context/Context";
import Pregunta from "./Pregunta";
import ImagenError from "./ImagenError";

const Juego = () => {
  const {
    error,
    setError,
    preguntas,
    numPregunta,
    setNumPregunta,
    setResultJuego,
  } = useContext(Context);
  const letras = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "Ñ",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const [posiciones, setPosiciones] = useState([]);
  const navigate = useNavigate();
  const contenedorBotones = useRef();

  const letraEnRespuesta = (respuesta, letra) => respuesta.includes(letra);

  const jugar = (e) => {
    let letra = e.target.innerHTML;
    const rpt = preguntas[numPregunta].respuesta;
    const respuesta = rpt.split("");

    if (letraEnRespuesta(respuesta, letra)) {
      e.target.classList.add("bg-green-500", "disabled");
      setPosiciones(
        [
          ...posiciones,
          ...respuesta.reduce((acu, valor, index) => {
            if (valor === letra) acu.push(index);
            return acu;
          }, []),
        ].sort((a, b) => a - b)
      );
      if (posiciones.length + 1 === respuesta.length) {
        const botones = contenedorBotones.current.querySelectorAll(".btn");
        botones.forEach((btn) => {
          btn.classList.remove("bg-green-500", "bg-red-500", "disabled");
        });

        if (numPregunta + 1 === preguntas.length) {
          setNumPregunta(0);
          setResultJuego("ganaste");
          navigate("/finjuego", { replace: true });
        } else {
          setNumPregunta(numPregunta + 1);
          setPosiciones([]);
        }
      }
    } else {
      if (error < 6) {
        e.target.classList.add("bg-red-500");
        setError(error + 1);
      } else {
        setError(1);
        setResultJuego("perdiste");
        navigate("/finjuego", { replace: true });
      }
    }
  };

  return (
    <div className="w-1/2 flex flex-col">
      <Pregunta posiciones={posiciones}></Pregunta>
      <div ref={contenedorBotones} className="flex justify-center flex-wrap">
        {letras.map((l) => (
          <button
            key={l}
            className="btn w-10 h-10 p-2 rounded-sm m-2 border-dashed border border-black font-bold"
            onClick={jugar}
          >
            {l}
          </button>
        ))}
      </div>
      <ImagenError></ImagenError>
    </div>
  );
};

export default Juego;
