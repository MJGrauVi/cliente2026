import React from "react";
import { useNavigate } from "react-router-dom";
const AcercaDe = () => {
  //Hook para
  const navegar = useNavigate();
  return (
    <div className="contenedor-acercade">
      <h2>Acerca de:</h2>
      <p>Estamos realizando un práctica de DWC con react.</p>
      <button
        onClick={() => {
          navegar("/");
        }}
      >
        Volver a Inicio
      </button>
    </div>
  );
};
export default AcercaDe;
