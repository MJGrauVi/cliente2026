import React, { useState, useEffect } from "react";
import Pelicula from "./Pelicula.jsx";
import Contenedor from "./Contenedor.jsx";
import archivoPelis from "../assets/archivoPelis.json";

const Peliculas = () => {
  const [peliculas, setPeliculas] = useState([]);

  // Al montar el componente, cargamos el JSON en el estado
  useEffect(() => {
    setPeliculas(archivoPelis);
  }, []);

  return (
    <Contenedor>
      {peliculas.map((peli, index) => (
        <Pelicula
          key={index}
          titulo={peli.titulo}
          director={peli.director}
          cartel={peli.cartel}
          interpretes={peli.interpretes}
        >
          {peli.resumen}
        </Pelicula>
      ))}
    </Contenedor>
  );
};

export default Peliculas;
