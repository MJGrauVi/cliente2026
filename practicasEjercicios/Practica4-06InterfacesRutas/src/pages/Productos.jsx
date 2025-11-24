import React from "react";
import Peliculas from "../components/Peliculas.jsx";
import Contenedor from "../estructura/Contenedor.jsx";
import "./Productos.css";
import { useNavigate } from "react-router-dom";

const Productos = () => {
  const navegar = useNavigate();
  return (
    <div className="contenedor-productos">
      <h2>Productos</h2>
      <Contenedor>
        <Peliculas />
      </Contenedor>
      <button
        onClick={() => {
          navegar("/");
        }}
      >
        Volver a Inicio
      </button>
    </div>
  );
};
export default Productos;
