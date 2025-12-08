import { useEffect, useState } from "react";
import ActorDetalle from "./ActorDetalle";
import "./PeliculaDetalle.css";

const PeliculaDetalle = ({ film }) => {
  const [actores, setActores] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedActor, setSelectedActor] = useState(null);

  useEffect(() => {
    if (!film) return;

    let active = true;
    async function loadActors() {
      setLoading(true);
      try {
        const urls = film.characters.slice(0, 10);
        const responses = await Promise.all(urls.map(url => fetch(url)));
        const data = await Promise.all(
          
          responses.map(res => {
            if (!res.ok) throw new Error("Error cargando actor");
            return res.json();
          })
        );
        console.log(data);
        if (active) setActores(data);
      } catch (err) {
        console.error(err);
      } finally {
        if (active) setLoading(false);
      }
    }
    loadActors();
    return () => { active = false };
  }, [film]);

  if (!film) return <p>Selecciona una película.</p>;

  return (
    <div className="pelicula-detalle">
      <h2>{film.title}</h2>
      <p><strong>Director:</strong> {film.director}</p>
      <p><strong>Fecha:</strong> {new Date(film.release_date).toLocaleDateString("es-ES", {
        day: "numeric", month: "long", year: "numeric"
      })}</p>

      <h3>Actores (10 primeros):</h3>
      {loading && <p>Cargando actores...</p>}

      <ul>
        {actores.map(actor => (
          <li key={actor.url}>
            <button onClick={() => setSelectedActor(actor)}>
              {actor.name}
            </button>
          </li>
        ))}
      </ul>

      {/* Aquí delegamos en ActorDetalle */}
      {selectedActor && <ActorDetalle actor={selectedActor} />}
    </div>
  );
}
export default PeliculaDetalle;