import { useContext, useRef, useState } from "react";
import Context from "./context/Context";
import Tarea from "./components/Tarea";

function App() {
  const { tareas, setTareas } = useContext(Context);
  const [texto, setTexto] = useState();
  const [id, setId] = useState(0);
  const input = useRef();

  const copiarTarea = (e) => {
    setTexto(e.target.value);
  };

  const guardarTarea = () => {
    setTareas((e) => [...e, [id, texto]]);
    setId((id) => id + 1);
    input.current.value = "";
  };

  return (
    <>
      <div className="min-h-screen bg-slate-300">
        <div className="mx-auto w-1/3 p-5">
          <h1 className="text-2xl font-bold text-center">Lista de Tareas</h1>
          <div className="flex flex-col">
            <div className="flex">
              <div className="w-3/4">
                <input
                  ref={input}
                  className="w-full px-1 py-2 outline-none"
                  type="text"
                  onChange={copiarTarea}
                />
              </div>
              <div className="flex-1">
                <button
                  className="w-full h-full bg-blue-800 text-white text-sm"
                  onClick={guardarTarea}
                >
                  Subir
                </button>
              </div>
            </div>
            <div>
              {/*Tareas*/}
              {tareas.map((e) => (
                <Tarea key={e[0]} id={e[0]} tarea={e[1]}></Tarea>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
