<<<<<<< HEAD
import React from "react";
import "./Interprete.css";

const Interprete = ( props ) => {
  return (
    <div className="interprete-interprete">
      {/* <a href={props.foto} target="_blank" rel="noopener noreferrer"> */}
        <img className="interprete-img" src={props.foto} alt={props.nombre} />
      {/* </a> */}
      <div className="interprete-info">
        <h3>{props.nombre}</h3>
        <p><strong>Biografía: </strong>{props.children}</p>
      </div>
    </div>
  );
};

export default Interprete;
=======
import React from "react";
import "./Interprete.css";

const Interprete = ( props ) => {
  return (
    <div className="interprete-interprete">
      <img className="interprete-img" src={props.foto} alt={props.nombre} />
      <div className="interprete-info">
        <h3>{props.nombre}</h3>
        <p><strong>Biografía: </strong>{props.children}</p>
      </div>
    </div>
  );
};

export default Interprete;
>>>>>>> 896d9c9416e91d2a8a0317413e79e589092012d7
