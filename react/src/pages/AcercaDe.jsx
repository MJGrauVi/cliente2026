import React from "react";
import { useNavigate } from "react-router-dom";
const AcercaDe = () => {
  //Hook para
  const navegar = useNavigate();
  return (
    <div className="contenedor-acercade">
      <h2>Acerca de:</h2>
      <p>Estamos realizando un práctica de DWC con react.</p>
      <div>
        <p><strong>Organización del proyecto</strong></p>
        <p>He creado un directorio estructura para ir incorporando los componentes que van a estructurar la web, y pages para incluir los componentes referentes a la página.</p>
        <p>Además de esto en el directorio routes en incluido los componentes Routes y Menu por si funcionalidad.</p>
      </div>
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
