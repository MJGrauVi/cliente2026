import "./App.css";
import React from "react";
import Listado from "./estados/Listado.jsx";
import ContadorLimite from "./estados/ContadorLimite.jsx";
import ContadorLikes from "./estados/ContadorLikes.jsx";

const App = () => {
  return (
    <div>
      <h3>Práctica 3.08 Estados en React. </h3>
      <Listado />
      <ContadorLimite />
      <ContadorLikes />
    </div>
  );
};

export default App;
