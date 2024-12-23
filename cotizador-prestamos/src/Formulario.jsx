import { useForm } from "react-hook-form";
import calcular from "./Calculadora";

const Formulario = ({ setCanPrestamo, setPlazo, setTotal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ canPrestamo, plazo }) => {
    setCanPrestamo(canPrestamo);
    setPlazo(plazo);
    setTotal(calcular(Number(canPrestamo), Number(plazo)));
  };

  const validate = (value) => {
    return value === "" ? false : true;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" flex justify-center items-center py-5 px-8"
    >
      <div className="bg-yellow-300 rounded-lg px-9 py-12 w-3/4 grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="cantidad-prestamo" className="text-sm text-gray-700">
            Cantidad préstamo
          </label>
          <input
            type="number"
            id="cantidad-prestamo"
            {...register("canPrestamo", { required: true })}
            className="outline-none p-2 rounded-md text-sm text-gray-700"
          />
          {errors.canPrestamo?.type === "required" && (
            <p className="text-xs text-red-500">Este campo es obligatorio</p>
          )}
        </div>
        <div>
          <label htmlFor="plazo" className="text-sm text-gray-700">
            Plazo para pagar
          </label>
          <select
            {...register("plazo", { validate })}
            className="w-full rounded-md p-2 text-sm text-gray-700"
          >
            <option value="">Seleccionar</option>
            <option value="3">3 meses</option>
            <option value="6">6 meses</option>
            <option value="12">12 meses</option>
            <option value="24">24 meses</option>
          </select>
          {errors.plazo?.type === "validate" && (
            <p className="text-xs text-red-500">Este campo es obligatorio</p>
          )}
        </div>
        <div className="col-span-2 flex">
          <button
            type="submit"
            className="text-gray-700 bg-white py-2 w-full rounded-md"
          >
            Calcular
          </button>
        </div>
      </div>
    </form>
  );
};

export default Formulario;
