import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [ciudad, setCiudad] = useState("Lima");
  const [datos, setDatos] = useState({});

  const consultaApi = () => {
    const URL = `http://api.weatherapi.com/v1/current.json?key=39ffc767c5404531995185643232112&q=${ciudad}&aqi=no`;
    const peticion = fetch(URL);
    peticion
      .then((res) => res.json())
      .then((res) => {
        if ("error" in res) {
          setDatos({ error: res.error.message });
        } else {
          setDatos({
            country: res.location.country,
            localtime: res.location.localtime,
            region: res.location.region,
            temp_c: res.current.temp_c,
            temp_f: res.current.temp_f,
          });
        }
      })
      .catch((err) => console.log(`Error: ${err}`));
  };

  useEffect(() => {
    consultaApi();
  }, []);

  const seguirTexto = (e) => {
    setCiudad(e.target.value);
  };

  const buscarTemp = () => {
    consultaApi();
  };

  return (
    <>
      <div className="container mx-auto min-h-screen bg-slate-200 flex items-center justify-center ">
        <div className="flex flex-col w-1/3 h-80 bg-white rounded-lg p-5">
          <div className="flex h-1/6 bg-slate-300">
            <div className="flex w-3/4">
              <input
                className="bg-slate-200 px-2 w-full outline-none"
                type="text"
                onChange={seguirTexto}
              />
            </div>
            <div className="flex flex-1 bg-slate-400 text-lg font-semibold">
              <button className="w-full" onClick={buscarTemp}>
                Buscar
              </button>
            </div>
          </div>
          <div className="flex-1">
            {"error" in datos ? (
              <p className="text-xl font-bold text-center text-red-500">
                Error, no se puedo encontrar la temperatura para la ciudad
              </p>
            ) : (
              <div>
                <p className="text-xl font-semibold my-2">
                  País:{" "}
                  <span className="text-red-500 font-bold">
                    {datos.country}
                  </span>{" "}
                </p>
                <p className="text-xl font-semibold my-2">
                  Región:{" "}
                  <span className="text-red-500 font-bold">{datos.region}</span>
                </p>
                <p className="text-xl font-semibold my-2">
                  Tiempo actual:{" "}
                  <span className="text-red-500 font-bold">
                    {datos.localtime}
                  </span>
                </p>
                <p className="text-xl font-semibold my-2">
                  Temperatura °C:{" "}
                  <span className="text-red-500 font-bold">{datos.temp_c}</span>
                </p>
                <p className="text-xl font-semibold my-2">
                  Temperatura °F:{" "}
                  <span className="text-red-500 font-bold">{datos.temp_f}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
