import { useEffect, useState } from 'react';
import { imagenes } from './data';

//Algoritmo para mezclar array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

//Foto de incógnito
const photo = 'https://www.html6.es/img/rey_incognito.png';

function App() {
  const cuadros = [...imagenes, ...imagenes];
  const [cartas, setCartas] = useState([]);
  const [cartasJugadas, setCartasJugadas] = useState([]);

  useEffect(() => {
    setCartas(
      shuffleArray(
        cuadros.map((cuadro) => {
          return { img: cuadro, mostrar: false };
        })
      )
    );
  }, []);

  const endOfGame = () => cartas.every((carta) => carta.mostrar);

  const marcar = (index) => {
    if (endOfGame()) return;

    if (!cartasJugadas.includes(index) && cartasJugadas.length < 2) {
      setCartasJugadas((cartasJugadas) => [...cartasJugadas, index]);

      setCartas((cartas) =>
        cartas.map((carta, i) => {
          if (index === i) return { ...carta, mostrar: true };
          else return carta;
        })
      );

      if (cartasJugadas.length === 1) {
        const firstIndex = cartasJugadas[0];
        if (cartas[firstIndex].img !== cartas[index].img) {
          setTimeout(() => {
            setCartas((cartas) =>
              cartas.map((carta, i) => {
                if (i === firstIndex || i === index)
                  return { ...carta, mostrar: false };
                else return carta;
              })
            );
          }, 2000);
        }
      }
    } else setCartasJugadas([]);
  };

  return (
    <div className="container min-h-screen mx-auto flex justify-center items-center">
      <div className="grid grid-cols-4 gap-8 w-3/4">
        {cartas.map((carta, i) => (
          <div
            key={i}
            className="w-40 rounded-2xl p-2 border-2 border-black bg-orange-600 cursor-pointer"
            onClick={() => marcar(i)}
          >
            <img
              src={carta.mostrar ? carta.img : photo}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
