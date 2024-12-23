import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Movie from "./components/Movie";

function App() {
  return (
    <>
      <div className="box">
        <Routes>
          <Route path="/" element={<MainPage></MainPage>}></Route>
          <Route path="/movies/:id" element={<Movie></Movie>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
