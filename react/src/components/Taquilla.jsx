import React from "react";


const Taquilla = (props) => {
  const { recaudacion, taquillaRef } = props;
  return (
    <div className="contenedor-taquilla" ref={taquillaRef}>
      <strong>Recaudación:</strong> {recaudacion}.
    </div>
  );
};

export default Taquilla;
