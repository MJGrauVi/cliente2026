import React, { useState } from "react";
import Discente from "./Discente.jsx";
import archivoDiscentes from "../assets/matriculados.json";
import "./Matricula.css";

const Matricula = () => {
  //Inicializo el estado con un array vacio.
  const [discentes, setDiscentes] = useState([]);
  const [mostrar, setMostrar] = useState(false);

  //Para incorporar un título al resultado de cada "onClick".
  const [titulo, setTitulo] = useState("");
  const [ordenAscendente, setOrdenAscendente] = useState(true);

  //Para mostrar el nombre de la persona desmatriculada.
  const [mensajeDesmatriculacion, setMensajeDesmatriculacion] = useState("");

  //Cargo el componente y muestro el listado.
  const mostrarTodos = () => {
    setDiscentes(archivoDiscentes.discentes);
    setMostrar(true);
    setTitulo("Alumnos matriculados");
  };

  //Filtro para mostrar discentes con la cadena indicada.
  const segundoDaw = () => {
    const filtro2Daw = archivoDiscentes.discentes.filter(
      (v) => v.curso == "2DAW"
    );
    setDiscentes(filtro2Daw);
    setMostrar(true);
    setTitulo("Alumnos de 2º de DAW.");
  };

  //Filtro discentes que incluyan 1 en su string.
  const alumnos1 = () => {
    const filtroAlumnos1 = archivoDiscentes.discentes.filter((v) =>
      v.curso.includes(1)
    );
    setDiscentes(filtroAlumnos1);
    setTitulo("Alumnos matriculado en 1º.");
    setMostrar(true);
  };
  const alumnosDaw = () => {
    const filtroAlumnosDaw = archivoDiscentes.discentes.filter((v) =>
      v.curso.includes("DAW")
    );
    setDiscentes(filtroAlumnosDaw);
    setTitulo("Alumnos matriculados en DAW");
    setMostrar(true);
  };
  const aficionLector = () => {
    const filtroLector = archivoDiscentes.discentes.filter((v) =>
      v.aficiones.includes("lectura")
    );
    setDiscentes(filtroLector);
    setTitulo("Alumnos aficionados a la lectura.");
    setMostrar(true);
  };

  const ordenAlfabeto = () => {
    const ordenados = [...archivoDiscentes.discentes].sort((a, b) => {
      //toSorted() devuelve una copia ordenada del original, a diferencia de .sorted(debemos realizar la copia nosotros).

      const apellidosA = a.apellidos;
      const apellidosB = b.apellidos;
      if (apellidosA < apellidosB) return ordenAscendente ? -1 : 1;
      if (apellidosA > apellidosB) return ordenAscendente ? 1 : -1;
      return 0;
    });

    setDiscentes(ordenados);
    setTitulo("Listado de alumnos por orden alfabetico");
    setOrdenAscendente(!ordenAscendente);
    setMostrar(true);
  };

  const desmatricular = (nombreCompleto) => {
    const matriculadosActuales = archivoDiscentes.discentes.filter(
      (v) => `${v.apellidos} ${v.nombre}` !== nombreCompleto
    );
    setDiscentes(matriculadosActuales);
    setMensajeDesmatriculacion(`Se ha desmatriculado a: ${nombreCompleto}`);
    setMostrar(true);
  };

  const resetear = () => {
    setDiscentes([]);
    setMostrar(false);
    setMensajeDesmatriculacion("");
  };

  return (
    <div className="matricula-container">
      <h1>Curso 2025 - 2026</h1>
      <div className="matricula-botones">
        <button className="btn mostrar" onClick={mostrarTodos}>
          Mostrat todos
        </button>
        <button className="btn segundo" onClick={segundoDaw}>
          2º DAW
        </button>
        <button className="btn primero" onClick={alumnos1}>
          Alumnos 1º curso
        </button>
        <button className="btn daw" onClick={alumnosDaw}>
          Alumnos DAW
        </button>
        <button className="btn lector" onClick={aficionLector}>
          Aficionados a la lectura
        </button>
        <button className="btn orden" onClick={ordenAlfabeto}>
          Listado por apellidos
        </button>
        <button className="btn reset anchoTotal" onClick={resetear}>
          Reiniciar
        </button>
      </div>
      {/*Comprobamos que hay título y si hay se muestra. */}
      {mostrar && <h2>{titulo}</h2>}
      {mensajeDesmatriculacion && (
        <p className="mensajeDesmatriculacion">{mensajeDesmatriculacion}</p>
      )}
      {mostrar ? (
        discentes.length !== 0 ? (
          discentes.map((valor, index) => (
            <Discente key={index} datos={valor} desmatricular={desmatricular} />
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

export default Matricula;
