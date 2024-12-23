import { useState } from "react";
import Header from "./Header";
import Formulario from "./Formulario";
import Resultado from "./Resultado";

function App() {
  const [canPrestamo, setCanPrestamo] = useState(0);
  const [plazo, setPlazo] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <>
      <div className="h-screen flex justify-center">
        <div className="w-1/2">
          <Header></Header>
          <Formulario
            setCanPrestamo={setCanPrestamo}
            setPlazo={setPlazo}
            setTotal={setTotal}
          ></Formulario>
          <Resultado
            canPrestamo={canPrestamo}
            plazo={plazo}
            total={total}
          ></Resultado>
        </div>
      </div>
    </>
  );
}

export default App;
