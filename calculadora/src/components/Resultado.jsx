import { useContext } from "react";
import Context from "../context/Context";

const Resultado = () => {
  const { op1, op2, setOp2, op2Text, setOp2Text, signo } = useContext(Context);

  const escribir = (e) => {
    let nuevoCaracter = e.target.value.replace(op2Text || "0", "");

    if ("1234567890".includes(nuevoCaracter)) {
      let num =
        op2 === undefined || !op2Text
          ? nuevoCaracter
          : op2Text.concat(nuevoCaracter);

      setOp2Text(num);
      setOp2(Number(num));
    }
  };

  return (
    <div className="bg-white mb-7 p-2 flex flex-col rounded-md">
      {op1 === undefined ? null : (
        <span className="text-black text-xs text-right px-3 py-1">
          {op1} {signo}
        </span>
      )}
      <input
        type="text"
        className="w-full text-xl font-medium outline-none text-right px-3 py-2"
        value={op2Text || 0}
        onChange={escribir}
      />
    </div>
  );
};

export default Resultado;
