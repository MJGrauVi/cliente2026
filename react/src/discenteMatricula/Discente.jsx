import "./Discente.css";
import React, { useState } from "react";

const Discente = ({ datos, desmatricular }) => {
  const { nombre, apellidos, curso, aficiones, comida } = datos;
  const [hover, setHover] = useState(false);

  const nombreCompleto = `${apellidos} ${nombre}`;

  return (
    <div
      className="discente-container"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Botón flotante (encima del texto, no lo desplaza) */}
      {hover && (
        <button
          className="btn-desmatricular"
          onClick={() => desmatricular(nombreCompleto)}
        >
          Desmatricular
        </button>
      )}

      <ul className="discente-info">
        <li>
          <strong>Nombre completo:</strong> {nombreCompleto}
        </li>
        <li>
          <strong>Curso:</strong> {curso}
        </li>
        <li>
          <strong>Aficiones:</strong> {aficiones.join(", ")}
        </li>
        <li>
          <strong>Comida favorita:</strong> {comida}
        </li>
      </ul>
    </div>
  );
};

export default Discente;
