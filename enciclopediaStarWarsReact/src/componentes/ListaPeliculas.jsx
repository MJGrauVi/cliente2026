import { useEffect, useState } from "react";
import "./ListaPeliculas.css";

const ListaPeliculas = ({ onSelectFilm }) => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadFilms() {
      try {
        const res = await fetch("https://swapi.py4e.com/api/films/");
        if (!res.ok) throw new Error("Error al cargar películas");
        const data = await res.json();
        setFilms(data.results || data || []);
      } catch (err) {
      /*  console.error(err);*/ 
        setError(err.message); 
      } finally {
        setLoading(false);
      }
    }
    loadFilms();
  }, []);

  if (loading) return <p>Cargando películas...</p>;
  if (error) return <p>{error}</p>;
  if (films.length === 0) return <p>No hay películas disponibles.</p>;

  return (
    <div className="listaPeliculas-starwars">
      <h2>Películas</h2>
      <ul>
        {films.map(film => (
          <li key={film.episode_id}>
            <button onClick={() => onSelectFilm?.(film)}>
              {film.title}
            </button>
          </li>
        ))}

      </ul>
    </div>
  );
};

export default ListaPeliculas;
