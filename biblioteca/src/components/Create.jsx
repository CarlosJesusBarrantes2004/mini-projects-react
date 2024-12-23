import { useContext } from "react";
import { useState } from "react";
import Context from "./context/Context";
import { useRef } from "react";

function Create() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [introduccion, setIntroduccion] = useState("");
  const [review, setReview] = useState("");
  const [cover, setCover] = useState("");

  const { setLibros } = useContext(Context);

  const inputTitulo = useRef();
  const inputAutor = useRef();
  const inputIntro = useRef();
  const inputReview = useRef();
  const inputCover = useRef();

  const lecturaImagen = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setCover(reader.result.toString());
    };
  };

  const registrar = () => {
    inputAutor.current.value = "";
    inputIntro.current.value = "";
    inputReview.current.value = "";
    inputTitulo.current.value = "";
    inputCover.current.value = "";
    setLibros((libros) => [
      ...libros,
      { id: crypto.randomUUID(), titulo, autor, cover, introduccion, review },
    ]);
  };

  return (
    <div className="flex flex-1 justify-center items-center">
      <div className="flex flex-col w-1/3 p-4 bg-white rounded-md ">
        <div className="flex flex-col">
          <label htmlFor="titulo">Título</label>
          <input
            ref={inputTitulo}
            type="text"
            className="px-2 py-1 outline-none bg-slate-300 mb-2"
            onChange={(e) => setTitulo(e.target.value)}
          />
          <label htmlFor="">Autor</label>
          <input
            ref={inputAutor}
            type="text"
            className="px-2 py-1 outline-none bg-slate-300 mb-2"
            onChange={(e) => setAutor(e.target.value)}
          />
          <label htmlFor="">Cover</label>
          <input
            ref={inputCover}
            type="file"
            accept=".jpeg,.jpg,.png"
            className="mb-2"
            onChange={lecturaImagen}
          />
          <label htmlFor="">Introducción</label>
          <input
            ref={inputIntro}
            type="text"
            className="px-2 py-1 outline-none bg-slate-300 mb-2"
            onChange={(e) => setIntroduccion(e.target.value)}
          />
          <label htmlFor="">Review</label>
          <input
            ref={inputReview}
            type="text"
            className="px-2 py-1 outline-none bg-slate-300 mb-2"
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        <button
          className="bg-color1 px-4 py-2 rounded-md text-white mt-8 mx-auto"
          onClick={registrar}
        >
          Registrar libro
        </button>
      </div>
    </div>
  );
}

export default Create;
