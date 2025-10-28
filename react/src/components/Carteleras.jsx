
import React from 'react';
import "./Carteleras.css";

const Carteleras = ({ peliculas }) => {
  if (!Array.isArray(peliculas) || peliculas.length === 0) {
    return <p>No hay carteleras.</p>;
  }


  return (
    <div>
      <h2 className="carteleras-carteleras">Carteleras:</h2>
      <ul className="lista-carteleras">
        {peliculas.map((peli, index) => (
          <li key={index}>
            <img
              src={peli.cartelera}
              alt={`Cartel de ${peli.nombre}`}
              className="cartelera-img"
            />
            <p><strong>{peli.nombre}</strong> - Dir. {peli.director}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carteleras;