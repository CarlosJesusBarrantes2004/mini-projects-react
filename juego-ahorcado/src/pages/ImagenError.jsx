import { useContext } from "react";
import Context from "../context/Context";

const ImagenError = () => {
  const { error } = useContext(Context);

  return (
    <div className="flex justify-center py-4">
      <img
        src={`./src/assets/images/el_ahorcado${error}.png`}
        alt="Foto de juego del ahorcado"
      />
    </div>
  );
};

export default ImagenError;
