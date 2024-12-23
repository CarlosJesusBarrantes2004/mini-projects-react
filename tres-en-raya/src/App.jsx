import { useEffect, useRef, useState } from "react";
import RouterPrincipal from "./rutas/RouterPrincipal";

function App() {
  const [tema, setTema] = useState("light");
  const moon = useRef();
  const sun = useRef();

  useEffect(() => {
    tema === "dark"
      ? document.querySelector("body").classList.add("dark")
      : document.querySelector("body").classList.remove("dark");
  }, [tema]);

  const cambiarTema = () => {
    if (tema === "light") {
      setTema("dark");
      moon.current.classList.remove("hidden");
      sun.current.classList.add("hidden");
    } else {
      setTema("light");
      moon.current.classList.add("hidden");
      sun.current.classList.remove("hidden");
    }
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="flex flex-col w-1/2 justify-center">
          <div className="mb-4 px-4">
            <button
              ref={sun}
              className="text-indigo-500 dark:text-white text-2xl hidden"
              onClick={cambiarTema}
            >
              <i className="fa-regular fa-sun"></i>
            </button>
            <button
              ref={moon}
              className="text-indigo-500 dark:text-white text-2xl"
              onClick={cambiarTema}
            >
              <i className="fa-regular fa-moon"></i>
            </button>
          </div>
          <RouterPrincipal></RouterPrincipal>
        </div>
      </div>
    </>
  );
}

export default App;
