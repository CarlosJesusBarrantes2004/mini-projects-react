import { useState } from "react";
import Values from "values.js";

const FormColor = ({ setList }) => {
  const [color, setColor] = useState("blue");
  const [error, setError] = useState(false);

  const handleGenerator = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      console.log(colors);
      setList(colors);
      setError(false);
    } catch (err) {
      setError(true);
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleGenerator}>
        <input
          type="text"
          placeholder="red"
          onChange={(e) => setColor(e.target.value)}
        />
        <input type="submit" value={"Generar"} />
      </form>
      {error && <p>No existe ese color</p>}
    </div>
  );
};

export default FormColor;
