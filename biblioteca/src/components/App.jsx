import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import Error404 from "./Error404";
import Nav from "./Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-stone-800">
          <Nav></Nav>
          <Routes>
            <Route path={"/"} element={<Home></Home>}></Route>
            <Route path={"/*"} element={<Error404></Error404>}></Route>
            <Route path={"/home"} element={<Home></Home>}></Route>
            <Route path={"/create"} element={<Create></Create>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
