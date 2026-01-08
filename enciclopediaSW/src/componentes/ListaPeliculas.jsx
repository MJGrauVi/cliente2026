import { useEffect, useContext, useState } from "react";
import { ContextoPelicula } from "../context/ProveedorPelicula.jsx";
import { traerDatos } from "../../funciones/funciones.js";
import "./ListaPeliculas.css";

const ListaPeliculas = () => {
  const { seleccionarPelicula } = useContext(ContextoPelicula);
  const [films, setFilms] = useState([]);

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
  }, []);

  // Manejo de clic con delegación de eventos.
  const manejarClic = (e) => {
    if (e.target.tagName !== "BUTTON") return;

    const id = Number(e.target.dataset.id); // <- CORRECCIÓN
    const filmSeleccionada = films.find(
      (film) => film.episode_id === id
    );

    if (filmSeleccionada) {
      seleccionarPelicula(filmSeleccionada);
    }
  };

  return (
    <div>
      <h2>Películas</h2>
      <ul onClick={manejarClic}>
        {films.map((film) => (
          <li key={film.episode_id}>
            <button data-id={film.episode_id}>{film.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaPeliculas;
