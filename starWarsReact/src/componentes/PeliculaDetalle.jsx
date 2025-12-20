import { useEffect, useState } from "react";
import ActorDetalle from "./ActorDetalle.jsx";
import "./PeliculaDetalle.css";

const PeliculaDetalle = ({ film }) => {
  const [actores, setActores] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedActor, setSelectedActor] = useState(null);

  useEffect(() => { //se ejecuta cada vez que cambia la pelicula selleccionada[film].
    if (!film) return;

    let active = true;//ponemos a false para evitar actualizar el estado cuando el componente ya no está montado.
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

  if (!film) return <h3>Selecciona una película del listado.</h3>;

  return (
    <div className="pelicula-detalle-general">
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
      </div>
      <div className="actor-detalles-fisicos">

        {/* Aquí delegamos en ActorDetalle */}
        {selectedActor && <ActorDetalle actor={selectedActor} />}
      </div>
    </div>
  );
}
export default PeliculaDetalle;