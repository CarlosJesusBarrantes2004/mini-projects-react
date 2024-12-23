import { useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
  const [op1, setOp1] = useState();
  const [op2, setOp2] = useState();
  const [op2Text, setOp2Text] = useState(op2);
  const [signo, setSigno] = useState("");

  return (
    <Context.Provider
      value={{
        op1,
        setOp1,
        op2,
        setOp2,
        op2Text,
        setOp2Text,
        signo,
        setSigno,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
