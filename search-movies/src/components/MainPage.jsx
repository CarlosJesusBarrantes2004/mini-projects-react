import FormSearch from "./FormSearch";
import Movies from "./Movies";

const MainPage = () => {
  return (
    <div>
      <h1 className="title">Old Movies Finder</h1>
      <FormSearch></FormSearch>
      <Movies></Movies>
    </div>
  );
};

export default MainPage;
