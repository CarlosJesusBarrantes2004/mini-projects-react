import { useForm } from "react-hook-form";

const Registrar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-gray-800 flex-1 flex justify-center items-center">
      <div className="w-3/4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col border-2 border-gray-600 rounded-sm p-4"
        >
          <h1 className="text-3xl text-white font-bold mb-2">Registrarse</h1>
          <div className="flex flex-col mb-2">
            <label
              htmlFor="user-name"
              className="text-sm text-white font-semibold"
            >
              Nombre de usuario
            </label>
            <input
              id="user-name"
              type="text"
              className="outline-none bg-gray-300 font-semibold px-3 py-2 text-sm"
              {...register("userName", {
                required: true,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,15}$/,
              })}
            />
          </div>
          {errors.userName?.type === "required" && (
            <p className="text-red-500 font-semibold text-xs mb-3">
              Este campo es obligatorio.
            </p>
          )}
          {errors.userName?.type === "pattern" && (
            <p className="text-red-500 font-semibold text-xs mb-3">
              Nombre de usuario no válido, debe contener A-Z,a-z,0-9 y además
              debe tener un tamaño mínimo de 8 caracteres y un máximo de 15.
            </p>
          )}
          <div className="flex flex-col mb-2">
            <label
              htmlFor="correo"
              className="text-sm text-white font-semibold"
            >
              Correo
            </label>
            <input
              id="correo"
              type="email"
              className="outline-none bg-gray-300 font-semibold px-3 py-2 text-sm"
              {...register("correo", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
          </div>
          {errors.correo?.type === "required" && (
            <p className="text-red-500 font-semibold text-xs mb-3">
              Este campo es obligatorio.
            </p>
          )}
          {errors.correo?.type === "pattern" && (
            <p className="text-red-500 font-semibold text-xs mb-3">
              Correo electrónico no válido.
            </p>
          )}
          <div className="flex flex-col mb-2">
            <label
              htmlFor="password"
              className="text-sm text-white font-semibold"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              className="outline-none bg-gray-300 font-semibold px-3 py-2 text-sm"
              {...register("password", {
                required: true,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,
              })}
            />
          </div>
          {errors.password?.type === "required" && (
            <p className="text-red-500 font-semibold text-xs mb-3">
              Este campo es obligatorio.
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500 font-semibold text-xs mb-3">
              La contraseña debe contener A-Z,a-z,0-9 y además debe tener un
              tamaño mínimo de 8 caracteres y un máximo de 15.
            </p>
          )}
          <div className="mt-4">
            <button
              type="submit"
              className="bg-green-500 px-4 py-2 text-white text-sm font-bold rounded-sm"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registrar;
