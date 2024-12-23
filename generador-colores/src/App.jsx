import { useState } from "react";
import Values from "values.js";
import FormColor from "./components/FormColor";
import DisplayColors from "./components/DisplayColors";

function App() {
  const [list, setList] = useState(new Values("red").all(10));

  return (
    <>
      <h1>Generator Color</h1>
      <FormColor setList={setList}></FormColor>
      <DisplayColors list={list}></DisplayColors>
    </>
  );
}

export default App;
