import React from "react";
import "./Contenedor.css";

//He indicado props.children para seguir la linea de todo el ejercicio ya que no he utilizado desestructuring,
//a pesar de que indicas que no tiene props. Entiendo que lo que no quieres es que se pase los datos por atributo.
const Contenedor = (props) => {
  //Seria lo mismo ({children}}) y en el return {children} sin el props.
  return <div className="contenedor-contenedor">{props.children}</div>;
};

export default Contenedor;
