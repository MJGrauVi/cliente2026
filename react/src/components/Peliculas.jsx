import Pelicula from "./Pelicula.jsx";
import Contenedor from "./Contenedor.jsx";
import archivoPelis from "../assets/archivoPelis2.json";
import React, { useState } from "react";

const Peliculas = () => {
  //Inicializo el estado con un array vacio para usar useState y luego lo cargo con setPeliculas.
  //Se puede cargar directamente y no es necesario es estado.
  const [peliculas, setPeliculas] = useState([]);
  if (peliculas.length === 0) {
    console.log(typeof archivoPelis);
    setPeliculas(archivoPelis.peliculas);
    console.log(typeof archivoPelis.peliculas);
  }
  return (
    <Contenedor>
      {archivoPelis.peliculas.length !== 0 ? (
        archivoPelis.peliculas.map((peli, index) => (
          <Pelicula key={index} datos={peli}>
            {peli.resumen}
          </Pelicula>
        ))
      ) : (
        <h2>¡No hay películas, el archivo está vacío!</h2>
      )}
    </Contenedor>
  );
};

export default Peliculas;
