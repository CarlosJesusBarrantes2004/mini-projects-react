import { useRef, useState } from "react";
import Emojis from "./data/Emojis";

function App() {
  const input = useRef();
  const [mensaje, setMensaje] = useState("Este es un mensaje.");
  const [visible, setVisible] = useState(false);
  const [emojis, setEmojis] = useState(Emojis);

  const agregarEmoji = (e) => {
    const emoji = e.target.innerText;
    const posicionCursor = input.current.selectionStart;
    let array = mensaje.split("");
    array.splice(posicionCursor, 0, emoji);
    let nuevoMensaje = array.join("");

    setMensaje(nuevoMensaje);
  };

  const buscarEmoji = (e) => {
    const emojiBuscar = e.target.value;

    setEmojis(
      Emojis.filter((emj) =>
        emj.palabrasClave.some((pc) => pc.includes(emojiBuscar))
      )
    );
  };

  return (
    <>
      <div className="min-h-screen container mx-auto flex justify-center items-center">
        <div className="w-1/4 flex flex-col">
          <div className="flex">
            <input
              ref={input}
              type="text"
              className="flex-grow outline-none p-2 text-sm bg-slate-200"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            />
            <button
              className="flex-shrink-0"
              onClick={() => setVisible(!visible)}
            >
              😂
            </button>
          </div>
          <div
            className={`bg-black rounded-sm p-2 mt-2 ${
              !visible ? "hidden" : ""
            }`}
          >
            <input
              type="text"
              className="bg-white p-2 outline-none text-sm w-full"
              onChange={buscarEmoji}
            />
            {emojis.map((emo, index) => (
              <button
                key={index}
                className="mt-2 w-10 h-10 rounded-sm hover:bg-white"
                onClick={agregarEmoji}
              >
                {emo.emoji}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
