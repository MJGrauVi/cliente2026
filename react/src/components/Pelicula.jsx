import React from "react";
import Interprete from "./Interprete.jsx";
import "./Pelicula.css";

const Pelicula = ({ titulo, director, cartel, children, interpretes }) => {
  return (
    <div className="pelicula-pelicula">
      <h1 className="pelicula-h1-titulo">{titulo}</h1>
      <h4>Dirigida por: {director}</h4>
      <img className="pelicula-img" src={cartel} alt={titulo} />
      <div className="pelicula-children">
        <strong>Resumen: </strong>
        {children}
      </div>
      <h3 className="pelicula-h3-elenco">Elenco:</h3>
      <div className="pelicula-elenco">
        {interpretes && interpretes.map((int, index) => (
          <Interprete
            key={index}
            nombre={int.nombre}
            foto={int.foto}
          >
            {int.bio}
          </Interprete>
        ))}
      </div>
    </div>
  );
};

export default Pelicula;
