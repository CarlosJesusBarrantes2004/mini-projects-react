import imgPrincipal from "../assets/images/libertad.jpg";
import img2 from "../assets/images/reglas.jpg";

const Index = () => {
  return (
    <div className="bg-gray-800 flex-1 px-20 py-16">
      <div className="flex border-2 border-gray-600 w-full">
        <div className="w-1/2">
          <img
            src={imgPrincipal}
            alt="Foto de libertad"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-1 items-center p-4">
          <p className="text-white font-semibold text-lg flex flex-wrap text-justify">
            <span className="text-4xl font-bold mb-4">Hola!, ¿Cómo estás?</span>{" "}
            Bienvenido a OASIS, esta página es para ti, para que te sientas
            cómodo, puedas conocer a alguien, conversar, pasar un momento de
            diversión y seas tú mismo.
          </p>
        </div>
      </div>
      <hr className="border-gray-600 my-10" />
      <div className="flex border-2 border-gray-600 w-full">
        <div className="w-1/2">
          <img
            src={img2}
            alt="Reglas del grupo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center p-4 flex-1 text-white">
          <div className="text-left">
            <h2 className="text-4xl font-bold mb-4">Reglas</h2>
            <p className="flex flex-col text-justify text-lg font-semibold">
              <span className="mb-2">
                <strong className="font-bold text-2xl">1.</strong> Ser
                respetuoso con los demás.
              </span>
              <span className="mb-2">
                <strong className="font-bold text-2xl">2.</strong> No compartir
                contenido inadecuado, de ser así se te expulsará del grupo.
              </span>
              <span className="mb-2">
                <strong className="font-bold text-2xl">3.</strong> Sé libre,
                respetando a los demás.
              </span>
              <span className="mb-2">
                <strong className="font-bold text-2xl">4.</strong> Sé feliz.
              </span>
              <span className="mb-2">
                <strong className="font-bold text-2xl">5.</strong> Sé creativo.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
