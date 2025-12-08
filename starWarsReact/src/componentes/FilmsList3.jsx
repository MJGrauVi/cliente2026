import { useEffect, useState } from "react";

export default function FilmList3({ onSelectFilm }) {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Normaliza cualquier respuesta al formato que tu lista espera
  function normalizeFilms(data) {
    const list = Array.isArray(data?.results) ? data.results
               : Array.isArray(data) ? data
               : null;
    if (!list) throw new Error("Formato de datos inesperado");

    // Crea campos seguros para key y título
    return list.map(f => ({
      // Usa varias opciones por si faltan campos según la API
      episode_id: f.episode_id ?? f.episode ?? f.episodeNumber ?? f.id ?? f.url ?? crypto.randomUUID(),
      title: f.title ?? f.name ?? `Episodio ${f.episode_id ?? "?"}`,
      // Propaga el resto por si lo necesita FilmDetail
      ...f
    }));
  }

  useEffect(() => {
    const controller = new AbortController();

    async function loadFilms() {
      try {
        const res = await fetch("https://swapi.info/api/films/", { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}: Error al cargar películas`);
        const data = await res.json();

        const normalized = normalizeFilms(data);
        setFilms(normalized);
      } catch (err) {
        // Guarda el error para mostrarlo en UI
        setError(err.message || "Error desconocido");
      } finally {
        setLoading(false);
      }
    }

    loadFilms();
    return () => controller.abort();
  }, []);

  if (loading) return <p>Cargando películas...</p>;
  if (error) return <p>Hubo un problema: {error}</p>;
  if (!films.length) return <p>No se encontraron películas.</p>;

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
