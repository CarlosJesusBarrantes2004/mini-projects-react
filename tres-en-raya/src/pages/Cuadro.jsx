import { useContext } from 'react';
import Context from '../context/Context';

const Cuadro = ({ fila, columna }) => {
  const { turno, movimientos, setMovimientos } = useContext(Context);

  const seleccionar = (e) => {
    let marca = '';
    if (turno === 1) {
      e.target.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

      marca = 'x';
    } else {
      e.target.innerHTML = `<i class="fa-regular fa-circle"></i>`;

      marca = 'o';
    }
    e.target.disabled = true;

    setMovimientos([
      ...movimientos.map((f, i) => {
        return [
          ...f.map((c, j) => {
            if (i === fila && j === columna) return marca;
            else return c;
          }),
        ];
      }),
    ]);
  };

  return (
    <button
      className={`border-indigo-500 dark:border-white w-16 h-16 text-black dark:text-white ${
        fila === 0 || fila === 1 ? 'border-b-4' : ''
      } ${columna === 0 || columna === 1 ? 'border-r-4' : ''}`}
      onClick={seleccionar}
    ></button>
  );
};

export default Cuadro;
