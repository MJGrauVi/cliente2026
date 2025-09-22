import React from "react";
import "./Interprete.css";

const Interprete = ( props ) => {
  return (
    <div className="interprete-interprete">
      <a href={props.foto} target="_blank" rel="noopener noreferrer">
        <img className="interprete-img" src={props.foto} alt={props.nombre} />
      </a>
      <div>
        <h3>{props.nombre}</h3>
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default Interprete;
