import React from "react";
import { useNavigate } from "react-router-dom";
const AcercaDe = () => {
  //Hook para
  const navegar = useNavigate();
  return (
    <div className="contenedor-acercade">
      <h2>Acerca de:</h2>
      <p>Estamos realizando un práctica de DWC con react.</p>
      <p><strong>Versión:</strong> 1.1</p>
      <p><strong>Creador:</strong> María José Grau</p>
      <p><strong>Fecha modificación:</strong>Octubre 2025</p>
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
