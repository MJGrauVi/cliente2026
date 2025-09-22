import React from "react";
import Interprete from "./Interprete";
import "./Pelicula.css";

const Pelicula = (props) => {
  return (
    <div className="pelicula-pelicula">
      <h2 className="pelicula-h2">{props.titulo}</h2>
      <h4>Dirigida por: {props.director}</h4>
      <img src={props.cartel} alt={props.titulo} />
      <div className="pelicula-children">{props.children}</div>
      <h3>Elenco:</h3>
{/* 
      <Interprete
        nombre="Jorma Tommila"
        foto="https://healthyceleb.com/wp-content/uploads/2023/05/Jorma-Tommila-as-seen-in-an-Instagram-Post-in-March-2019-2.jpg"
      >
        Actor principal de la película, conocido por su intensidad
        interpretativa.
      </Interprete>
        <Interprete
        nombre="Jorma Tommila"
        foto="https://healthyceleb.com/wp-content/uploads/2023/05/Jorma-Tommila-as-seen-in-an-Instagram-Post-in-March-2019-2.jpg"
      >
        Actor principal de la película, conocido por su intensidad
        interpretativa.
      </Interprete>
        <Interprete
        nombre="Jorma Tommila"
        foto="https://healthyceleb.com/wp-content/uploads/2023/05/Jorma-Tommila-as-seen-in-an-Instagram-Post-in-March-2019-2.jpg"
      >
        Actor principal de la película, conocido por su intensidad
        interpretativa.
      </Interprete> */}
    </div>
  );
};

export default Pelicula;
