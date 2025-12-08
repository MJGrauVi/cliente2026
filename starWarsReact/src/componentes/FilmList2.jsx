import { useEffect, useState } from "react";

export default function FilmList2({ onSelectFilm }) {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  const urlApis = [
    "https://swapi.dev/api/films/",
    "https://swapi.info/api/films/",
    "http://swapi.py4e.com/api/films/"
  ];

  // Función que devuelve una promesa que se resuelve solo si la respuesta es válida
  function fetchFilms(url) {
    return fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`Error en ${url}`);
        return res.json();
      })
      .then(data => {
        if (!data.results) throw new Error(`Formato inválido en ${url}`);
        return data.results;
      });
  }

  useEffect(() => {
    async function loadFilms() {
      try {
        // Promise.race devuelve la primera promesa que se resuelva correctamente
        const results = await Promise.race(urlApis.map(fetchFilms));
        setFilms(results);
      } catch (err) {
        console.error("Todas las APIs fallaron o la primera en responder fue inválida:", err);
      } finally {
        setLoading(false);
      }
    }
    loadFilms();
  }, []);

  if (loading) return <p>Cargando películas...</p>;
  if (!films.length) return <p>No se pudieron cargar películas.</p>;

  return (
    <div>
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
