import "./App.css";
import React from "react";
import Listado from "./estados/Listado.jsx";
import ContadorLimite from "./estados/ContadorLimite.jsx";
import ContadorLikes from "./estados/ContadorLikes.jsx";
import Peliculas from "./components/Peliculas.jsx";
import Matricula from "./discenteMatricula/Matricula.jsx";

const App = () => {
  return (
    <div>
      {/*  <Peliculas /> */}
      {/* <h3>Práctica 3.08 Estados en React. </h3>*/}
      {/* <Listado />
      <ContadorLimite />
      <ContadorLikes /> */}
      <Matricula />
    </div>
  );
};

export default App;
