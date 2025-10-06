import React from "react";
import Interprete from "./Interprete.jsx";
import "./Pelicula.css";

const Pelicula = (props) => {
  //Desestructuro props que contiene los datos que pasan por parámetro y los que van por children.
  const { datos, children} = props;
  const { nombre, director, cartelera, actores, recaudacion } = datos;
  
  return (
    <div className="pelicula-pelicula">
      <h1 className="pelicula-h1-titulo">{nombre}</h1>
      <h4>Dirigida por: {director}</h4>
      <img className="pelicula-img" src={cartelera} alt={nombre} />

      <div className="pelicula-children">
        <strong>Resumen: </strong>
        {children}
      </div>
      <div className="pelicula-recaudacion"><strong>Recaudacion:</strong> {recaudacion}</div>

      <h3 className="pelicula-h3-elenco">Elenco:</h3>
      <div className="pelicula-elenco">
        {actores &&
          actores.map((act, index) => (
            <Interprete key={index} nombre={act.nombre} foto={act.foto}>
              {act.bio}
            </Interprete>
          ))}
      </div>
    </div>
  );
};

export default Pelicula;
