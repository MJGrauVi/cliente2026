import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Formulario from "../pages/Formulario.jsx"
import ListadoDiscos from "../pages/ListadoDiscos.jsx";
import Error from "../pages/Error";

const Rutas = () => {
  return (
    <div className="contenedor-rutas">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="formulario" element={<Formulario />} />
        <Route path="listadoDiscos" element={<ListadoDiscos />} />
        <Route path="*" element={<Error />}/>
      </Routes>
    </div>
  );
};
export default Rutas;
