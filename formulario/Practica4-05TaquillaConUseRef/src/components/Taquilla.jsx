import React from "react";

const Taquilla = (props) => {
  const { recaudacion, taquillaRef } = props;

  // Extraer número y convertir a millones
  const cantidad = parseFloat(recaudacion.replace(/[^0-9.]/g, "")) * 1_000_000;

  // Formatear con separadores y símbolo €
  const recaudacionFormateada = `${cantidad.toLocaleString("es-ES")}€`;

  return (
    <div className="contenedor-taquilla" ref={taquillaRef}>
      <strong>Recaudación:</strong> {recaudacionFormateada}
    </div>
  );
};

export default Taquilla;
