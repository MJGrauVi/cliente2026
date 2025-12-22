import { useEffect, useContext, useState } from "react";
import { ContextoPelicula } from "../context/ProveedorPelicula.jsx";
import { traerDatos } from "../../funciones/funciones.js";
import "./ListaPeliculas.css";

const ListaPeliculas = () => {
  //Obtenemos la función para seleccionar la película desde el contexto.
  const { seleccionarPelicula } = useContext(ContextoPelicula);

  //Estado para almacenar las peliculas .
  const [films, setFilms] = useState([]);

  //Ejecuta el código y carga las peliculas.
  useEffect(() => {
    const cargarPeliculas = async () => {
      try {
        const data = await traerDatos("https://swapi.py4e.com/api/films/");
        setFilms(data);
      } catch (error) {
        console.error("Error cargando películas:", error);
      }
    };
    cargarPeliculas();
  }, []);//Dependencia [] vacia indica que se monta solo 1 vez, al cargar la aplicación.

  return (
    <div>
      <h2>Películas</h2>
      <ul>
        {films.map((film) => (
          <li key={film.episode_id}>
            <button onClick={() => seleccionarPelicula(film)}>{film.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaPeliculas;
