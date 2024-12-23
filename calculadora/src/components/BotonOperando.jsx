import { useContext } from "react";
import Context from "../context/Context";

const BotonOperando = ({ operando }) => {
  const { op1, setOp1, op2, setOp2, setOp2Text, signo, setSigno } =
    useContext(Context);

  const operar = (e) => {
    let nuevoSigno = e.target.innerText;
    let res = 0;

    if (nuevoSigno === "=" && op1 === undefined) {
      setOp2Text(op2);
    } else if (op1 !== undefined && op2 !== undefined) {
      switch (signo) {
        case "+":
          res = op1 + op2;
          break;
        case "-":
          res = op1 - op2;
          break;
        case "*":
          res = op1 * op2;
          break;
        case "/":
          res = op1 / op2;
          break;
      }

      if (!isFinite(res)) {
        setOp2Text("El resultado es infinito");
        setOp1();
        setOp2();
        return;
      }

      if (nuevoSigno === "=") {
        setSigno("");
        setOp2(res);
        setOp1();
      } else {
        setOp2();
        setOp1(res);
        setSigno(nuevoSigno);
      }

      setOp2Text(res);
    } else {
      setSigno(nuevoSigno);
      if (op2 !== undefined) setOp1(op2);
      setOp2();
    }
  };

  return (
    <button
      className={`text-black font-bold text-2xl rounded-full w-14 h-14 ${
        operando !== "=" ? "bg-slate-300" : "bg-yellow-500"
      }`}
      onClick={operar}
    >
      {operando}
    </button>
  );
};

export default BotonOperando;
