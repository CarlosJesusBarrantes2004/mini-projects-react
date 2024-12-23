import { useState } from "react";
import Formulario from "./Formulario";
import DisplayGifts from "./DisplayGifts";

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="min-h-screen max-w-screen-2xl mx-auto bg-sky-300">
        <div className="flex flex-col p-7">
          <h1 className="text-black font-extrabold text-xl text-center">
            Gift Expert
          </h1>
          <Formulario setValue={setValue}></Formulario>
          <DisplayGifts value={value}></DisplayGifts>
        </div>
      </div>
    </>
  );
}

export default App;
