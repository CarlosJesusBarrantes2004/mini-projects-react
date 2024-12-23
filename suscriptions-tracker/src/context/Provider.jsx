import { useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
  const [presupuestoInicial, setPresupuestoInicial] = useState();
  const [presupuesto, setPresupuesto] = useState();
  const [gasto, setGasto] = useState(0);
  const [serviciosEscogidos, setServiciosEscogidos] = useState([]);
  const [servicio, setServicio] = useState("");
  const [costoServicio, setCostoServicio] = useState(0);
  const [accion, setAccion] = useState("add");

  return (
    <Context.Provider
      value={{
        presupuestoInicial,
        setPresupuestoInicial,
        presupuesto,
        setPresupuesto,
        gasto,
        setGasto,
        serviciosEscogidos,
        setServiciosEscogidos,
        servicio,
        setServicio,
        costoServicio,
        setCostoServicio,
        accion,
        setAccion,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
