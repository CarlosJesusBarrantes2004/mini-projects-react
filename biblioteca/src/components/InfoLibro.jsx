const InfoLibro = ({ libro, setMostrarInfo }) => {
  return (
    <div className="relative flex flex-col w-1/2 mx-auto ">
      <button
        className="absolute bg-stone-500 w-10 h-10 top-1 left-1 text-white p-1 rounded-full hover:opacity-60 transition ease-in duration-150"
        onClick={() => setMostrarInfo(false)}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </button>{" "}
      <div className="flex bg-white">
        <div className="h-96 w-60">
          <img
            className="w-full h-full object-cover"
            src={`${libro.cover}`}
            alt={`Portada de ${libro.titulo}`}
          />
        </div>
        <div className="flex flex-col border-l-2 border-stone-300 px-4 py-2">
          <p className="font-semibold text-lg mb-1">
            Autor: <span className="font-normal text-base">{libro.autor}</span>
          </p>
          <p className="font-semibold text-lg mb-1">
            Titulo:{" "}
            <span className="font-normal text-base">{libro.titulo}</span>
          </p>
          <p className="font-semibold text-lg mb-1">
            Introduccion:{" "}
            <span className="font-normal text-base">{libro.introduccion}</span>
          </p>
          <p className="font-semibold text-lg mb-1">
            Review:{" "}
            <span className="font-normal text-base">{libro.review}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoLibro;
