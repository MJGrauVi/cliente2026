import React from "react";
import BotonNavegar from "../estructura/BotonNavegar.jsx";

const AcercaDe = () => {
  return (
    <div className="contenedor-acercade">
      <h2>Acerca de:</h2>
      <p>Estamos realizando una práctica de DWC con React.</p>
      <BotonNavegar ruta="/" texto="Volver a Inicio" />
    </div>
  );
};

export default AcercaDe;