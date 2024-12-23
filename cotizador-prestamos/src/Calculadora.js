const calcular = (canPrestamo, plazo) => {
  let totalCantidad = 0;
  if (canPrestamo <= 1000) {
    totalCantidad = canPrestamo * 0.25;
  } else if (canPrestamo > 1000 && canPrestamo <= 5000) {
    totalCantidad = canPrestamo * 0.2;
  } else if (canPrestamo > 5000 && canPrestamo <= 10000) {
    totalCantidad = canPrestamo * 0.15;
  } else {
    totalCantidad = canPrestamo * 0.1;
  }

  let totalPlazo = 0;
  switch (plazo) {
    case 3:
      totalPlazo = canPrestamo * 0.05;
      break;
    case 6:
      totalPlazo = canPrestamo * 0.1;
      break;
    case 12:
      totalPlazo = canPrestamo * 0.15;
      break;
    case 24:
      totalPlazo = canPrestamo * 0.2;
      break;
    default:
      break;
  }

  return totalCantidad + totalPlazo + canPrestamo;
};

export default calcular;
