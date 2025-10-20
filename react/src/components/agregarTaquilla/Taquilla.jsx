import React from "react";
import "./Taquilla.css";

const Taquilla = (props) => {
  const {recaudacion, taquillaRef} = props;
  return (
    <div className="contenedor-taquilla" ref={taquillaRef}>
      {recaudacion}
    </div>
  );
};

export default Taquilla;
