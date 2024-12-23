import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Context from "../context/Context";

const Home = () => {
  const { loguearse, setJugadores } = useContext(Context);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setJugadores(data);
    loguearse();
    navigate("/juego", { replace: true });
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex rounded-2xl border-4 border-indigo-500 dark:border-white items-center p-2 mt-2">
          <label
            htmlFor="j1"
            className="w-1/3 text-black dark:text-white font-semibold text-xl border-r-4 border-indigo-500 dark:border-white align-middle px-2"
          >
            Jugador 1
          </label>
          <input
            id="j1"
            type="text"
            className="flex-1 outline-none pl-2 bg-transparent text-black dark:text-white text-xl font-bold"
            {...register("j1", {
              maxLength: 10,
              required: true,
            })}
            autoComplete="off"
          />
        </div>
        {errors.j1?.type === "required" && (
          <p
            role="alert"
            className="text-black dark:text-white text-center text-xs font-medium"
          >
            Este campo es obligatorio.
          </p>
        )}
        {errors.j1?.type === "maxLength" && (
          <p
            role="alert"
            className="text-black dark:text-white text-center text-xs font-medium"
          >
            El nombre del jugador 1 no debe tener más de 10 caracteres.
          </p>
        )}
        <div className="flex rounded-2xl border-4 border-indigo-500 dark:border-white items-center p-2 mt-2">
          <label
            htmlFor="j2"
            className="w-1/3 text-black dark:text-white font-semibold text-xl border-r-4 border-indigo-500 dark:border-white align-middle px-2"
          >
            Jugador 2
          </label>
          <input
            id="j2"
            type="text"
            className="flex-1 outline-none pl-2 bg-transparent text-black dark:text-white text-xl font-bold"
            {...register("j2", {
              maxLength: 10,
              required: true,
            })}
            autoComplete="off"
          />
        </div>
        {errors.j2?.type === "required" && (
          <p
            role="alert"
            className="text-black dark:text-white text-center text-xs font-medium"
          >
            Este campo es obligatorio.
          </p>
        )}
        {errors.j2?.type === "maxLength" && (
          <p
            role="alert"
            className="text-black dark:text-white text-center text-xs font-medium"
          >
            El nombre del jugador 2 no debe tener más de 10 caracteres.
          </p>
        )}
        <div className="flex justify-center mt-5">
          <input
            type="submit"
            value="Jugar"
            className="text-black dark:text-white font-bold text-xl rounded-2xl px-10 py-2 border-4 border-indigo-500 dark:border-white cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default Home;
