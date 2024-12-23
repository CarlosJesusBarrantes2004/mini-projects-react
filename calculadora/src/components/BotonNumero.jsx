import { useContext } from "react";
import Context from "../context/Context";

const Boton = ({ numero }) => {
  const { op2, setOp2, setOp2Text } = useContext(Context);

  const escribir = (e) => {
    if (op2 === undefined) {
      let num = e.target.innerText;
      setOp2Text(num.toString());
      setOp2(Number(num));
    } else {
      let num = op2.toString().concat(e.target.innerText);
      setOp2Text(num);
      setOp2(Number(num));
    }
  };

  return (
    <button
      className=" bg-slate-300 text-black font-bold text-2xl rounded-md w-14 h-14"
      onClick={escribir}
    >
      {numero}
    </button>
  );
};

export default Boton;
