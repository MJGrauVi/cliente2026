import { useEffect, useContext, useState } from "react";
import { FilmContext } from "../context/FilmContext";

const ListaPeliculas = () => {
  const { setSelectedFilm } = useContext(FilmContext);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("https://swapi.py4e.com/api/films/")
      .then(res => res.json())
      .then(data => setFilms(data.results));
  }, []);

  return (
    <div>
      <h2>Películas</h2>
      <ul>
        {films.map(film => (
          <li key={film.episode_id}>
            <button onClick={() => setSelectedFilm(film)}>
              {film.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaPeliculas;
