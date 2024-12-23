import Resultado from './components/Resultado';
import BotonNumero from './components/BotonNumero';
import BotonOperando from './components/BotonOperando';
import BotonReset from './components/BotonReset';

function App() {
  return (
    <>
      <div className="calculator">
        <div className="bg-neutral-500 rounded-md shadow-sm shadow-gray-600 px-4 py-7">
          <Resultado></Resultado>
          <div className="grid grid-cols-4 grid-rows-4 gap-5">
            <BotonNumero numero={7}></BotonNumero>
            <BotonNumero numero={8}></BotonNumero>
            <BotonNumero numero={9}></BotonNumero>
            <BotonOperando operando={'+'}></BotonOperando>
            <BotonNumero numero={4}></BotonNumero>
            <BotonNumero numero={5}></BotonNumero>
            <BotonNumero numero={6}></BotonNumero>
            <BotonOperando operando={'-'}></BotonOperando>
            <BotonNumero numero={1}></BotonNumero>
            <BotonNumero numero={2}></BotonNumero>
            <BotonNumero numero={3}></BotonNumero>
            <BotonOperando operando={'*'}></BotonOperando>
            <BotonNumero numero={0}></BotonNumero>
            <BotonOperando operando={'/'}></BotonOperando>
            <BotonReset></BotonReset>
            <BotonOperando operando={'='}></BotonOperando>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
