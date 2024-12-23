import { useContext, useRef, useState } from "react";
import Context from "../context/Context";

function Tarea({ id, tarea }) {
  const { tareas, setTareas } = useContext(Context);
  const [texto, setTexto] = useState(tarea);
  const [habilitado, setHabilitado] = useState(false);
  const btnEditar = useRef();
  const btnActualizar = useRef();
  const btnEliminar = useRef();

  const eliminar = () => {
    setTareas(
      tareas
        .map((e) => {
          if (e[0] !== id) return e;
        })
        .filter((e) => e)
    );
  };

  const copiarTexto = (e) => {
    setTexto(e.target.value);
  };

  const habilitar = (e) => {
    setHabilitado(true);
    e.target.classList.add("hidden");
    btnEliminar.current.classList.add("hidden");
    btnActualizar.current.classList.remove("hidden");
  };

  const editar = (e) => {
    setTareas(
      tareas.map((e) => {
        if (e[0] === id) e[1] = texto;
        return e;
      })
    );
    setHabilitado(false);
    e.target.classList.add("hidden");
    btnEditar.current.classList.remove("hidden");
    btnEliminar.current.classList.remove("hidden");
  };

  return (
    <div className="flex my-1 bg-white">
      <input
        className="w-3/4 p-1 outline-none "
        disabled={!habilitado}
        value={texto}
        onChange={copiarTexto}
      ></input>
      <div className="flex flex-1 p-1">
        <button
          ref={btnEditar}
          className="bg-blue-500 px-2 py-1 text-sm text-white mx-1 "
          onClick={habilitar}
        >
          Editar
        </button>
        <button
          ref={btnActualizar}
          className="hidden bg-blue-500 px-2 py-1 text-sm text-white mx-1 "
          onClick={editar}
        >
          Actualizar
        </button>
        <button
          ref={btnEliminar}
          className="bg-red-500 px-2 py-1 text-sm text-white mx-1"
          onClick={eliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Tarea;
