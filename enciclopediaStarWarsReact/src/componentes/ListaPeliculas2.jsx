import { useEffect, useState } from "react";
import "./ListaPeliculas.css";

const ListaPeliculas2 = ({ onSelectFilm }) => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  
//https://swapi.py4e.com/api/films/ //http://swapi.dev/api/films/ //http://swapi.py4e.com/api/films/
  useEffect(() => {
    async function loadFilms() {
      try {
        const res = await fetch("https://swapi.py4e.com/api/films/");
        if (!res.ok) throw new Error("Error al cargar películas");
        const data = await res.json();
        setFilms(data.results || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadFilms();
  }, []);

  if (loading) return <p>Cargando películas...</p>;

  return (
    <div className="listaPeliculas-starwars">
      <h2>Películas</h2>
      <ul>
        {films.map(film => (
          <li key={film.episode_id}>
            <button onClick={() => onSelectFilm(film)}>
              {film.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ListaPeliculas2;
