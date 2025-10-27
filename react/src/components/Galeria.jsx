import React from "react";

const Galeria = ({ datos }) => {
  if (!Array.isArray(datos) || datos.length === 0) {
    return <p>¡No hay carteleras disponibles!</p>;
  }
  return (
    <>
      <div className="galeria-contenedor">
        <h2>Galeria</h2>
        <ul className="lista-carteleras">
          {datos.map((peli, index) => (
            <li key={index}>
              <img
                src={peli.cartelera}
                alt={`Cartel pelicula ${peli.titulo}`}
                className="cartelera-img"
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Galeria;
