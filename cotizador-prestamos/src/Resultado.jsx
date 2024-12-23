const Resultado = ({ canPrestamo, plazo, total }) => {
  return (
    <div className="bg-gray-600 flex justify-center py-6 rounded-t-xl">
      {canPrestamo === 0 && plazo === 0 ? (
        <p className="text-lg text-white text-center">
          Ingrese una cantidad y un plazo...
        </p>
      ) : (
        <div className="flex flex-col">
          <span className="text-sm text-white font-semibold mb-2">
            La cantidad solicitada es de: $ {canPrestamo}
          </span>
          <span className="text-sm text-white font-semibold mb-2">
            A pagar en: $ {plazo} meses
          </span>
          <span className="text-sm text-white font-semibold mb-2">
            Su pago mensual es de: $ {(total / plazo).toFixed(2)}
          </span>
          <span className="text-sm text-white font-semibold">
            Total a pagar: $ {total}
          </span>
        </div>
      )}
    </div>
  );
};

export default Resultado;
