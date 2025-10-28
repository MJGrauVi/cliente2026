import React from "react";
import "./Galeria.css";
import "./Contenedor.css";
import { Link, useNavigate, Outlet } from "react-router-dom";
import Contenedor from "../components/Contenedor.jsx";


const Galeria = () => {
  const navegar = useNavigate();
  return (
    <>
      <h2>Galeria Carteleras.</h2>

      <nav className="galeria-navegacion">
        <Link className="galeria-elementosubmenu" to="/galeria/director">
          Carteleras por Director
        </Link>
        <Link className="galeria-elementosubmenu" to="/galeria/actor">
          Carteleras por Actor
        </Link>
        {/* Las rutas relativas también funcionan en <Link>, prefiero usar absolutas porque son más claras.. */}
        <Link className="galeria-elementosubmenu" to="/galeria/titulo">
          Carteleras por Título
        </Link>
      </nav>
      <Contenedor>
        <Outlet />
      </Contenedor>
      <button onClick={()=>navegar("/")}>Volver a Inicio</button>
    </>
  );
};

export default Galeria;
