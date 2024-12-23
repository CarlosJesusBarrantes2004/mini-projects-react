import { useContext } from "react";
import Context from "./context/Context";
import { useState } from "react";
import InfoLibro from "./InfoLibro";

function Home() {
  const { libros } = useContext(Context);
  const [libro, setLibro] = useState({});
  const [mostrarInfo, setMostrarInfo] = useState(false);

  const verInfo = ({ autor, titulo, introduccion, review, cover }) => {
    setLibro({ autor, titulo, introduccion, review, cover });
    setMostrarInfo(true);
  };

  return (
    <div className="flex-1 justify-center">
      <h1 className="text-center my-4 text-white text-3xl font-bold">
        Tus Libros
      </h1>
      {!mostrarInfo ? (
        <div className="grid grid-cols-3 gap-10 w-2/3 mx-auto">
          {libros.map((e) => (
            <div key={e.id} className="flex flex-col h-96 p-1">
              <div
                className="h-5/6 cursor-pointer"
                onClick={() => verInfo({ ...e })}
              >
                <img
                  src={`${e.cover}`}
                  alt={`Portada de ${e.titulo}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="flex-1 text-center text-white text-lg font-semibold">
                {e.titulo}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <InfoLibro libro={libro} setMostrarInfo={setMostrarInfo}></InfoLibro>
      )}
    </div>
  );
}

export default Home;
