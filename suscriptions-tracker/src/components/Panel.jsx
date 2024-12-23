import { useContext, useRef } from "react";
import Presupuesto from "./Presupuesto";
import Suscripciones from "./Suscripciones";
import Context from "../context/Context";
import Servicios from "./Servicios";

const Panel = () => {
  const {
    presupuestoInicial,
    setPresupuestoInicial,
    setPresupuesto,
    serviciosEscogidos,
  } = useContext(Context);
  const input = useRef();

  return (
    <div className="bg-sky-500 rounded-md shadow-md shadow-sky-400 w-1/2 p-5">
      <h1 className="text-white font-extrabold text-3xl uppercase text-center">
        Suscriptions Tracker
      </h1>
      <div className="flex justify-center mt-5">
        {presupuestoInicial === undefined ? (
          <div className="flex flex-col">
            <span className="text-white text-sm text-center font-bold">
              Agregar presupuesto
            </span>
            <input
              ref={input}
              type="number"
              placeholder="0 $"
              className="px-3 py-2 text-sm font-bold outline-none my-4 rounded-sm"
              min={0}
              step={1}
            />
            <button
              className="text-sm font-bold text-white bg-black px-7 py-2 rounded-md"
              onClick={() => {
                setPresupuestoInicial(input.current.value);
                setPresupuesto(input.current.value);
              }}
            >
              Agregar
            </button>
          </div>
        ) : (
          <>
            <Presupuesto></Presupuesto>
            <Suscripciones></Suscripciones>
          </>
        )}
      </div>
      {serviciosEscogidos.length > 0 ? <Servicios></Servicios> : null}
    </div>
  );
};

export default Panel;
