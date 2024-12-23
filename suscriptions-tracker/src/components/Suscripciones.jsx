import { useContext, useEffect, useRef, useState } from "react";
import servicios from "../data/data";
import Context from "../context/Context";

const Suscripciones = () => {
  const {
    serviciosEscogidos,
    setServiciosEscogidos,
    presupuestoInicial,
    presupuesto,
    setPresupuesto,
    setGasto,
    costoServicio,
    setCostoServicio,
    servicio,
    setServicio,
    accion,
    setAccion,
  } = useContext(Context);

  const [costo, setCosto] = useState(0);

  const input = useRef();

  const agregarServicio = () => {
    const existeServicio = serviciosEscogidos.find(
      (object) => object.servicio === servicio
    );

    if (costo > 0 && costo <= presupuesto && servicio && !existeServicio) {
      setServiciosEscogidos([
        ...serviciosEscogidos,
        {
          servicio,
          costoServicio: costo,
          img: servicios.find((obj) => obj.servicio === servicio).img,
        },
      ]);
    }
  };

  const actualizarServicio = () => {
    if (costo > 0 && costo - costoServicio <= presupuesto) {
      setServiciosEscogidos(
        serviciosEscogidos.map((object) => {
          if (object.servicio === servicio)
            return { ...object, costoServicio: costo };
          else return object;
        })
      );
      setAccion("add");
      setCostoServicio(0);
    }
  };

  const guardarServicio = () => {
    accion === "add" ? agregarServicio() : actualizarServicio();
    setServicio("");
    setCosto(0);
    input.current.value = "";
  };

  useEffect(() => {
    const gasto = serviciosEscogidos.reduce(
      (acu, servicio) => acu + servicio.costoServicio,
      0
    );
    setPresupuesto(presupuestoInicial - gasto);
    setGasto(gasto);
  }, [serviciosEscogidos]);

  return (
    <div className="flex flex-col text-center">
      <span className="text-black text-sm font-bold">
        Agregar suscripciones
      </span>
      <div className="flex flex-col mt-2">
        <span className="text-xs font-bold">Servicio</span>
        <select
          className="text-xs font-bold outline-none py-2 rounded-sm cursor-pointer text-center"
          value={servicio}
          disabled={accion === "update" ? true : false}
          onChange={(e) => setServicio(e.target.value)}
        >
          <option value={""}>Elegir</option>
          {servicios.map((obj, index) => (
            <option
              key={index}
              value={obj.servicio}
              className="text-xs font-bold"
            >
              {obj.servicio}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col my-2">
        <span className="text-xs font-bold">Costo</span>
        <input
          ref={input}
          type="number"
          className="px-3 py-2 text-sm font-semibold outline-none rounded-sm"
          placeholder="0 $"
          min={0}
          step={1}
          onChange={(e) => setCosto(Number(e.target.value))}
        />
      </div>
      <button
        className="text-sm font-bold text-white bg-black px-7 py-2 rounded-md"
        onClick={guardarServicio}
      >
        {accion === "add" ? "Agregar" : "Actualizar"}
      </button>
    </div>
  );
};

export default Suscripciones;
