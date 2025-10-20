import React from "react";
import { useRef } from "react";
import Interprete from "./Interprete.jsx";
import Taquilla from "./Taquilla.jsx";
import "./Pelicula.css";

const Pelicula = (props) => {
  //Desestructuro props que contiene los datos que pasan por parámetro y los que van por children.
  const { datos, children } = props;
  const { nombre, director, cartelera, actores, recaudacion } = datos;

  //Referencias a elementos del virtualdom.
  const elencoRef = useRef(null);
  const taquillaRef = useRef(null);

  //Función para cambiar la referencia, quita o pone la clase.
  const ocultarElenco = () => {
    elencoRef.current.classList.toggle("hidden");
  };
  const ocultarTaquilla = () => {
    taquillaRef.current.classList.toggle("hidden");
  };

  return (
    <div className="pelicula-pelicula">
      <h1 className="pelicula-h1-titulo">{nombre}</h1>
      <h4>Dirigida por: {director}</h4>
      <img className="pelicula-img" src={cartelera} alt={nombre} />

      <div className="pelicula-children">
        <strong>Resumen: </strong>
        {children}
      </div>
      {/*    <div className="pelicula-recaudacion">
        <strong>Recaudacion:</strong> {recaudacion}
      </div> */}
      <div className="pelicula-btnyTaquilla">
        <button className="botonElenco" onClick={ocultarElenco}>
          Elenco
        </button>
        <button className="botonTaquilla" onClick={ocultarTaquilla}>
          Taquilla
        </button>
        <div className="contenedor-taquilla hidden" ref={taquillaRef}>
          <Taquilla recaudacion={recaudacion} />
        </div>
      </div>
      <div className="pelicula-elenco hidden" ref={elencoRef}>
        {actores &&
          actores.map((act, index) => (
            <Interprete key={index} nombre={act.nombre} foto={act.foto}>
              {act.bio}
            </Interprete>
          ))}
          
      </div>
      <div className="separador">
        -----------------------------------------------------------------
      </div>
    </div>
  );
};

export default Pelicula;
