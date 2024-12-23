import { useContext } from "react";
import Context from "../context/Context";

const BotonReset = () => {
  const { setOp1, setOp2, setOp2Text } = useContext(Context);

  const resetear = () => {
    setOp1();
    setOp2();
    setOp2Text();
  };

  return (
    <button
      className=" bg-red-500 text-white font-bold text-2xl rounded-full w-14 h-14"
      onClick={resetear}
    >
      C
    </button>
  );
};

export default BotonReset;
