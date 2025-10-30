import React from "react";

const Taquilla = (props) => {
  const { recaudacion, taquillaRef } = props;

  //Reemplazo el $ por €.
  const cantidad2 = recaudacion.replace(/[^0-9.]/g, "");
  console.log(cantidad2);
  //Elimino de la cadena lo que distinto de dígito o "." y luego convierto string a float, mutiplico *1000000 para valor real.
  const cantidad = parseFloat(recaudacion.replace(/[^0-9.]/g, "")) * 1_000_000;
  console.log(typeof cantidad);

  //Incorporo en con template literals el simbolo de €.
  const recaudacionFormateada = `${cantidad.toLocaleString("es-ES")}€`;
  return (
    <div className="contenedor-taquilla" ref={taquillaRef}>
      <strong>Recaudación:</strong> {recaudacionFormateada}
    </div>
  );
};

export default Taquilla;
