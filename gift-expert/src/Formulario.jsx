import { useForm } from "react-hook-form";

const Formulario = ({ setValue }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ gift }) => {
    console.log(gift);
    setValue(gift);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex mt-4 justify-center"
    >
      <div className="mx-auto w-1/5">
        <input
          type="text"
          {...register("gift", { required: true })}
          className="text-sm text-gray-700 py-2 px-3 rounded-full outline-none focus:shadow-md focus:shadow-blue-500/50 w-full"
        />
        {errors.gift?.type === "required" && (
          <p className="text-red-500 text-xs font-normal text-center mt-2">
            El campo es obligatorio
          </p>
        )}
      </div>
    </form>
  );
};

export default Formulario;
