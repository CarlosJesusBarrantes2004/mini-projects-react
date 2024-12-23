import { useContext } from "react";
import { useState } from "react";
import { DataContext } from "../context/DataContext";

const FormSearch = () => {
  const [title, setTitle] = useState("");
  const { setQuery } = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(`&s=${title}`);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title movie"
        className="form__input"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="submit" value={"Search"} className="form__search" />
    </form>
  );
};

export default FormSearch;
