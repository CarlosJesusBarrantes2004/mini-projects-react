import PiePagina from "./components/PiePagina";
import Nav from "./navbar/Nav";
import RouterPrincipal from "./routers/RouterPrincipal";

function App() {
  return (
    <>
      <div className="min-h-screen max-w-screen-2xl mx-auto flex flex-col">
        <Nav></Nav>
        <RouterPrincipal></RouterPrincipal>
        <PiePagina></PiePagina>
      </div>
    </>
  );
}

export default App;
