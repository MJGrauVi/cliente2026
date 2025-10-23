import React, { useState } from "react";
import Discente from "./Discente.jsx";
import archivoDiscentes from "../../assets/matriculados.json";
import "./Matricula.css";

const Matricula = () => {
  //Inicializo el estado con un array vacio.
  const [discentes, setDiscentes] = useState([]);
  const [mostrar, setMostrar] = useState(false);

  //Para incorporar un título al resultado de cada "onClick".
  const [titulo, setTitulo] = useState("");
  const [ordenAscendente, setOrdenAscendente] = useState(true);

  //Para mostrar el nombre de la persona desmatriculada.
  const [matriculados, setMatriculados] = useState(archivoDiscentes.discentes);
  const [mensajeDesmatriculacion, setMensajeDesmatriculacion] = useState("");

  //

  //Cargo el componente y muestro el listado.
  const mostrarTodos = () => {
    setDiscentes(matriculados);
    setMostrar(true);
    setTitulo("Alumnos matriculados");
  };

  //Filtro para mostrar discentes con la cadena indicada.
  const segundoDaw = () => {
    const filtro2Daw = matriculados.filter((v) => v.curso == "2DAW");
    setDiscentes(filtro2Daw);
    setMostrar(true);
    setTitulo("Alumnos de 2º de DAW.");
  };

  //Filtro discentes que incluyan 1 en su string.
  const alumnos1 = () => {
    const filtroAlumnos1 = matriculados.filter((v) => v.curso.includes(1));
    setDiscentes(filtroAlumnos1);
    setTitulo("Alumnos matriculado en 1º.");
    setMostrar(true);
  };
  const alumnosDaw = () => {
    const filtroAlumnosDaw = matriculados.filter((v) =>
      v.curso.includes("DAW")
    );
    setDiscentes(filtroAlumnosDaw);
    setTitulo("Alumnos matriculados en DAW");
    setMostrar(true);
  };
  const aficionLector = () => {
    const filtroLector = matriculados.filter((v) =>
      v.aficiones.includes("lectura")
    );
    setDiscentes(filtroLector);
    setTitulo("Alumnos aficionados a la lectura.");
    setMostrar(true);
  };

  const ordenAlfabeto = () => {
    const ordenados = [...matriculados].sort((a, b) => {
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
    // Busco el alumno por nombre completo y me guardo el identificador.
    const alumnoDesmatricular = matriculados.find(
      (v) => `${v.apellidos} ${v.nombre}` === nombreCompleto
    );

    if (!alumnoDesmatricular) {
      setMensajeDesmatriculacion(`No se encontró a: ${nombreCompleto}`);
      return;
    }
    const id = alumnoDesmatricular.id;
    // Filtrar por id
    const alumnosActuales = matriculados.filter((v) => v.id !== id);

    setMatriculados(alumnosActuales);
    setDiscentes(alumnosActuales);
    setMensajeDesmatriculacion(
      `Se ha desmatriculado a: ${nombreCompleto} con id: ${id} `
    );
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
          discentes.map(
            (
              valor //key={crypto.randomUUID()}
            ) => (
              /*  <Discente key={index} datos={valor} desmatricular={desmatricular} /> */
              <Discente
                key={crypto.randomUUID()}
                datos={valor}
                desmatricular={desmatricular}
              />
            )
          )
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
