import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../context/Context";

const Home = () => {
  const navigate = useNavigate();
  const { loguearse, error } = useContext(Context);

  const jugar = () => {
    navigate("/juego", { replace: true });
    loguearse();
  };

  return (
    <div className="w-1/3 flex flex-col">
      <p className="text-2xl font-bold text-center">
        BIENVENIDO/A al juego del ahorcado
      </p>
      <div className="my-6 flex justify-center">
        <img
          src={`./src/assets/images/el_ahorcado${error}.png`}
          alt="Foto de juego del ahorcado"
        />
      </div>
      <button
        className="text-white bg-indigo-700 font-bold text-sm border-2 border-indigo-900 px-6 py-1 rounded-md text-center mx-auto w-1/4"
        onClick={jugar}
      >
        Jugar
      </button>
    </div>
  );
};

export default Home;
