import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import AcercaDe from "../pages/AcercaDe";
import Contacto from "../pages/Contacto";
import Error from "../pages/Error";
import Productos from "../pages/Productos.jsx";
const Rutas = () => {
  return (
    <div className="contenedor-rutas">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="acercade" element={<AcercaDe />} />
        <Route path="productos" element={<Productos />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="*" element={<Error />}/>
      </Routes>
    </div>
  );
};
export default Rutas;
