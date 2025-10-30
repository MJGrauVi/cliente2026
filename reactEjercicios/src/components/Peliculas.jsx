import { useState } from "react";
import Pelicula from "./Pelicula.jsx";
import Contenedor from "./Contenedor.jsx";
import archivoPeliculas from "../assets/archivoPelis2.json";

const Peliculas = () => {
  // Inicializa el estado directamente con los datos del archivo
  const [peliculas] = useState(archivoPeliculas.peliculas);

  return (
    <Contenedor>
      {/* Ternaria para mostrar el contenido si lo hay, sino, muestra un mensaje informando al usuario. */}
      {peliculas.length ? (
        peliculas.map((peli, index) => (
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
