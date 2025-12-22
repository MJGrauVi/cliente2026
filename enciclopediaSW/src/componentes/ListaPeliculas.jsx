import { useEffect, useContext, useState } from "react";
import { ContextoPelicula } from "../context/ProveedorPelicula.jsx";
import { traerDatos} from "../../funciones/funciones.js";
import "./ListaPeliculas.css";

const ListaPeliculas = () => {
  const { setSelectedFilm } = useContext(ContextoPelicula);
  const [films, setFilms] = useState([]);

useEffect(() => { 
  const cargarPeliculas = async () => { 
    try { 
      const data = await traerDatos("https://swapi.py4e.com/api/films/"); 
      setFilms(data); } catch (error) { 
        console.error("Error cargando películas:", error); 
      } 
    }; cargarPeliculas(); 
  }, []);

  return (
    <div>
      <h2>Películas</h2>
      <ul>
        {films.map((film) => (
          <li key={film.episode_id}>
            <button onClick={() => setSelectedFilm(film)}>{film.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaPeliculas;
