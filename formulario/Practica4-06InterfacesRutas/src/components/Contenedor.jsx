
import React from "react";
import "./Contenedor.css";

const Contenedor = ({children}) => {
  return (
    <div className="contenedor-contenedor">
      {children}
    </div>
  );
};

export default Contenedor;

