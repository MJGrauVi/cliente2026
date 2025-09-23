<<<<<<< HEAD
import React from "react";
import Interprete from "./Interprete.jsx";
import "./Pelicula.css";

const Pelicula = (props) => {
  return (
    <div className="pelicula-pelicula">
      <h1 className="pelicula-h1-titulo">{props.titulo}</h1>
      <h4>Dirigida por: {props.director}</h4>
      <img className="pelicula-img" src={props.cartel} alt={props.titulo} />
      <div className="pelicula-children"><strong>Resumen:  </strong>{props.children}</div>
      <h3 className="pelicula-h3-elenco">Elenco:</h3>
    </div>
  );
};

export default Pelicula;
=======
import React from "react";
import "./Pelicula.css";

const Pelicula = (props) => {
  return (
    <div className="pelicula-pelicula">
      <h1 className="pelicula-h1-titulo">{props.titulo}</h1>
      <h4>Dirigida por: {props.director}</h4>
      <img className="pelicula-img" src={props.cartel} alt={props.titulo} />
      <div className="pelicula-children"><strong>Resumen:  </strong>{props.children}</div>
      <h3 className="pelicula-h3-elenco">Elenco:</h3>
    </div>
  );
};

export default Pelicula;
>>>>>>> 896d9c9416e91d2a8a0317413e79e589092012d7
