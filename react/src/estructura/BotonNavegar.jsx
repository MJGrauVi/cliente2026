import React from "react";
import { useNavigate } from "react-router-dom";

const BotonNavegar = ({ ruta, texto }) => {
  const navegar = useNavigate();

  return (
    <button
      className="boton-navegar"
      onClick={() => navegar(ruta)}
    >
      {texto}
    </button>
  );
};

export default BotonNavegar;