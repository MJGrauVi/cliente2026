import React, { useState } from "react";
import Discente from "./Discente.jsx";
import archivoDiscentes from "../assets/matriculados.json";
import "./ListadoDiscentes.css";

const ListadoDiscentes = () => {
  //Inicializo el estado con un array vacio
  const [discentes, setDiscentes] = useState([]);
  const [mostrar, setMostrar] = useState(false);
  const [titulo, setTitulo] = useState("");

  //Cargo el componente y muestro el listado
  const mostrarTodos = () => {
    setDiscentes(archivoDiscentes.discentes);
    setMostrar(true);
    setTitulo("Alumnos matriculados");
  };
  const segundoDaw = () => {
    const filtro2Daw = archivoDiscentes.discentes.filter(
      (v) => v.curso == "2DAW"
    );
    setDiscentes(filtro2Daw);
    setMostrar(true);
    setTitulo("Alumnos de 2º de DAW.");
  };
  const alumnos1 = () => {
    const filtroAlumnos1 = archivoDiscentes.discentes.filter(
      (v) => v.curso.includes(1)
    );
    setDiscentes(filtroAlumnos1);
    setTitulo("Alumnos matriculado en 1º.");
  };

  const resetear = () => {
    setDiscentes([]);
    setMostrar(false);
  };

  return (
    <div className="listadoDiscentes-container">
      <h1>Curso 2025 - 2026</h1>
      <div className="listadoDiscentes-botones">
        <button onClick={mostrarTodos}>Mostrat todos</button>
        <button onClick={segundoDaw}>2º DAW</button>
        <button onClick={alumnos1}>Alumnos 1º curso</button>
        {/*<button>Alumnos DAW</button>
        <button>Aficionados a la lectura</button>
        <button>Listado por apellidos</button> */}
        <button onClick={resetear}>Reiniciar</button>

        <button></button>
      </div>
      {/*Comprovamos que hay título y si hay se muestra. */}
      {mostrar && <h2>{titulo}</h2>}
      {mostrar ? (
        discentes.length !== 0 ? (
          discentes.map((valor, index) => (
            <Discente key={index} datos={valor} />
          ))
        ) : (
          <h2>¡El archivo está vacío!</h2>
        )
      ) : (
        <h2>Pulsa el boton para ver el resultado.</h2>
      )}
    </div>
  );
};

export default ListadoDiscentes;
