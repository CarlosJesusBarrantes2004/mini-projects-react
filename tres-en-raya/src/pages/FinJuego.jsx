import { useContext } from "react";
import Context from "../context/Context";
import { useNavigate } from "react-router-dom";

const FinJuego = () => {
  const { turno, setTurno, jugadores, setMovimientos, gameOver, setGameOver } =
    useContext(Context);
  const navigate = useNavigate();

  const reset = () => {
    setTurno(2);
    setGameOver("inicio");
    setMovimientos(new Array(3).fill(new Array(3).fill("")));
    navigate("/juego", { replace: true });
  };

  return (
    <div className="flex flex-col">
      {gameOver === "empate" ? (
        <>
          <h2 className="text-indigo-500 dark:text-white text-center text-2xl font-bold mb-4">
            Empataron
          </h2>
        </>
      ) : (
        <>
          <h2 className="text-indigo-500 dark:text-white text-center text-2xl font-bold">
            Tenemos un ganador
          </h2>
          <div className="my-8">
            <span className="text-indigo-500 dark:text-white text-xl font-bold">
              Ganador : {turno === 1 ? jugadores.j1 : jugadores.j2}
            </span>
          </div>
        </>
      )}

      <button
        className="w-1/2 mx-auto text-indigo-500 dark:text-white font-bold text-xl rounded-2xl px-10 py-2 border-4 border-indigo-500 dark:border-white cursor-pointer"
        onClick={reset}
      >
        Jugar de nuevo
      </button>
    </div>
  );
};

export default FinJuego;
