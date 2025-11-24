import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <>
      <nav>
        <Link className="menu-elemento" to="/" title="">
          Inicio
        </Link>
        <Link className="menu-elemento" to="/formulario" title="">
          Insertar disco
        </Link>
        <Link className="menu-elemento" to="/listadoDiscos" title="">
          Listar disco
        </Link>
      </nav>
    </>
  );
};

export default Menu;
