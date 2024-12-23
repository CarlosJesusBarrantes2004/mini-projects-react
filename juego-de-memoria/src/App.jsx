import { useEffect, useState } from "react";
import { cuadros } from "./datos";

function App() {
  const arrayCuadros = [...cuadros, ...cuadros];
  const cuadrosPrev = arrayCuadros.map((cuadro) => {
    return { img: cuadro, mostrar: false };
  });

  const [cartas, setCartas] = useState([]);
  const [cartasSelec, setCartasSelec] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [aciertos, setAciertos] = useState(0);
  const [intentos, setIntentos] = useState(0);

  const entreverarArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const azar = Math.floor(Math.random() * (i + 1));
      [array[i], array[azar]] = [array[azar], array[i]];
    }

    setCartas([...array]);
  };

  useEffect(() => {
    entreverarArray(cuadrosPrev);
  }, []);

  const numColumns = () => `grid-cols-${cuadros.length}`;

  const finJuego = () => cartas.every((object) => object.mostrar);

  const marcar = (index) => {
    const existe = cartasSelec.find((object) => object.index === index);
    const encontrado = cartas[index].mostrar;

    if (cartasSelec.length < 2 && !existe && !encontrado) {
      setCartas(
        cartas.map((carta, i) => {
          if (index === i) {
            setCartasSelec([...cartasSelec, { img: carta.img, index }]);
            return { ...carta, mostrar: true };
          } else return carta;
        })
      );
    }
  };

  useEffect(() => {
    if (cartasSelec.length === 2) {
      setIntentos(intentos + 1);
      if (cartasSelec[0].img !== cartasSelec[1].img) {
        setTimeout(() => {
          cartasSelec.map((object) => {
            const provicional = [...cartas];
            provicional[object.index].mostrar = false;
            setCartas(provicional);
            setCartasSelec([]);
          });
        }, 2000);
      } else {
        setCartasSelec([]);
        setAciertos(aciertos + 1);
        if (finJuego()) setGameOver(true);
      }
    }
  }, [cartasSelec]);

  const reset = () => {
    if (confirm("Deseas jugar denuevo?")) {
      setGameOver(false);
      setAciertos(0);
      setIntentos(0);
      setCartasSelec([]);
      entreverarArray(cuadrosPrev);
    }
  };

  return (
    <>
      <div className="h-screen max-w-screen-2xl mx-auto flex flex-col items-center justify-center">
        <div className={`grid gap-5 ${numColumns()} p-2`}>
          {cartas.map((carta, index) => (
            <div
              key={index}
              className="bg-orange-500 rounded-md w-40 p-2 cursor-pointer border border-r-blue-500 border-t-red-500"
              onClick={() => marcar(index)}
            >
              <div>
                <img
                  src={
                    carta.mostrar
                      ? carta.img
                      : "https://www.html6.es/img/rey_incognito.png"
                  }
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm font-bold">Aciertos : {aciertos}</p>
        <p className="text-sm font-bold">Intentos: {intentos}</p>
        <p className="text-sm font-bold">
          Porcentaje: {!intentos || Math.round((aciertos / intentos) * 100)} %
        </p>
        {gameOver ? (
          <>
            <p className="text-red-500 text-lg font-bold">Fin del juego</p>
            <button
              className="border border-black text-white text-sm font-bold bg-red-500 rounded-md px-3 py-2 mt-2"
              onClick={reset}
            >
              Jugar de nuevo
            </button>
          </>
        ) : null}
      </div>
    </>
  );
}

export default App;
