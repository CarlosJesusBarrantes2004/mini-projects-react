import { useContext } from "react";
import Context from "../context/Context";

const Presupuesto = () => {
  const { presupuestoInicial, presupuesto, gasto } = useContext(Context);

  return (
    <div className="bg-sky-700 rounded-tl-lg rounded-br-lg rounded-tr-2xl rounded-bl-2xl px-4 py-8 flex flex-col mr-16">
      <span className="text-white font-bold text-sm">
        Presupuesto : $ {presupuestoInicial}
      </span>
      <span className="text-white font-bold text-sm my-3">
        Disponible : $ {presupuesto}
      </span>
      <span className="text-white font-bold text-sm">Gastado : $ {gasto}</span>
    </div>
  );
};

export default Presupuesto;
