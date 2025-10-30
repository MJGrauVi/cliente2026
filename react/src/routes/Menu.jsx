import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <>
      <nav>{/* Con Link vinculamos el path de la ruta con el menú de navegación. */}
        <Link className="menu-elemento" to="/">
          Inicio
        </Link>
        <Link className="menu-elemento" to="/peliculas">
          Peliculas
        </Link>
        <Link className="menu-elemento" to="/interpretes">
          Interpretes
        </Link>
        <Link className="menu-elemento" to="/galeria">
          Galeria
        </Link>
        <Link clasName="menu-elumento" to="/acercade">
          Acercade
        </Link>

      </nav>
    </>
  );
};

export default Menu;
