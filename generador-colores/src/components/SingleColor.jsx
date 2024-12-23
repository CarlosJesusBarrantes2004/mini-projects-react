import { useState } from "react";

const SingleColor = ({ color }) => {
  const [copy, setCopy] = useState(false);

  const handleCopy = (hexColor) => {
    const color = `#${hexColor}`;
    navigator.clipboard.writeText(color);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1500);
  };

  return (
    <div style={{ backgroundColor: `#${color.hex}` }}>
      <p>{color.hex}</p>
      <button onClick={() => handleCopy(color.hex)}>Copiar color</button>
      {copy && <span>Color copiado</span>}
    </div>
  );
};

export default SingleColor;
