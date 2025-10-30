
import React from "react";
import "./Interprete.css";

const Interprete = (props) => {
  return (
    <div className="interprete-interprete">
      <img className="interprete-img" src={props.foto} alt={props.nombre} />
      <div className="interprete-info">
        <h3>{props.nombre}</h3>
        <div><strong>Biografía: </strong>{props.children}</div>
      </div>
    </div>
  );
};

export default Interprete;

