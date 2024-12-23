import { useContext } from "react";
import Context from "../context/Context";

const Servicios = () => {
  const {
    serviciosEscogidos,
    setServiciosEscogidos,
    accion,
    setAccion,
    setServicio,
    setCostoServicio,
  } = useContext(Context);

  const eliminar = (servicio) => {
    if (confirm("¿Estas seguro de cancelar el servicio?")) {
      setServiciosEscogidos(
        serviciosEscogidos
          .map((object) => {
            if (object.servicio !== servicio) return object;
          })
          .filter((object) => object)
      );
    }
  };

  return (
    <div className="flex flex-col w-full my-10">
      <h1 className="text-xl font-bold text-center">Servicios</h1>
      {serviciosEscogidos.map((object, index) => (
        <div
          key={index}
          className="flex bg-white items-center justify-between px-16 py-7 rounded-md my-3"
        >
          <div className="flex items-center">
            <div className="flex flex-col">
              <span className="text-base font-bold text-center">
                {object.servicio}
              </span>
              <div className="w-24">
                <img
                  src={object.img}
                  alt={`Foto de ${object.servicio}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <span className="text-sm font-bold ml-10">
              $ {object.costoServicio}
            </span>
          </div>
          <div>
            <button
              className="bg-blue-500 text-sm text-white font-bold px-4 py-2 rounded-md mr-4 hover:bg-blue-700 transition ease-in duration-150"
              onClick={() => {
                setCostoServicio(object.costoServicio),
                  setServicio(object.servicio);
                setAccion("update");
              }}
            >
              Editar
            </button>
            <button
              className="bg-red-500 text-sm text-white font-bold px-4 py-2 rounded-md hover:bg-red-700 transition ease-in duration-150"
              onClick={() => eliminar(object.servicio)}
              disabled={accion === "update" ? true : false}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Servicios;
