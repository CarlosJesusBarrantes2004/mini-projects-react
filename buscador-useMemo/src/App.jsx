import { useMemo, useState } from "react";
import Resultados from "./data/Resultados";

function App() {
  const [filtroBuscar, setFiltroBuscar] = useState("all");
  const [results, setResults] = useState([]);
  const [item, setItem] = useState("");

  const resultados = useMemo(() => {
    if (filtroBuscar === "all")
      return Resultados.reduce(
        (acu, valorAc) => [...acu, ...valorAc.resultados],
        []
      );
    else
      return [
        ...Resultados.find((res) => res.category === filtroBuscar).resultados,
      ];
  }, [filtroBuscar]);

  const filtrarResultados = (e) => {
    const busqueda = e.target.value;
    setResults(resultados.filter((res) => res.includes(busqueda)));
  };

  const itemSeleccionado = useMemo(() => item, [item]);

  return (
    <>
      <div className="min-h-screen container mx-auto flex justify-center items-center">
        <div>
          <div className="flex">
            <button
              onClick={() => setFiltroBuscar("all")}
              className="px-2 py-1 border-2 border-black rounded-md mx-2 text-sm font-bold"
            >
              All
            </button>
            <button
              onClick={() => setFiltroBuscar("people")}
              className="px-2 py-1 border-2 border-black rounded-md mx-2 text-sm font-bold"
            >
              People
            </button>
            <button
              onClick={() => setFiltroBuscar("calendar")}
              className="px-2 py-1 border-2 border-black rounded-md mx-2 text-sm font-bold"
            >
              Calendar
            </button>
            <button
              onClick={() => setFiltroBuscar("emails")}
              className="px-2 py-1 border-2 border-black rounded-md mx-2 text-sm font-bold"
            >
              Emails
            </button>
          </div>
          {itemSeleccionado ? (
            <p className="font-bold text-sm mt-3">
              Item seleccionado : {itemSeleccionado}
            </p>
          ) : null}
          <div className="flex flex-col mt-3">
            <input
              type="text"
              className="bg-slate-200 px-3 py-2 rounded-t-md outline-none text-sm font-semibold"
              onChange={filtrarResultados}
            />
            {results.map((res, index) => (
              <p
                key={index}
                className="p-2 text-sm font-bold hover:bg-blue-500 hover:text-white my-2 cursor-pointer"
                onClick={(e) => setItem(e.target.innerText)}
              >
                {res}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
