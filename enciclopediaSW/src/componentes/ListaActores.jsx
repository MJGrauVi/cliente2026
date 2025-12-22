import { useContext, useEffect, useState } from "react";
import { ContextoPelicula } from "../context/ProveedorPelicula.jsx";
import { ContextoActor } from "../context/ProveedorActor.jsx";

const ListaActores = () => {
  const { selectedFilm } = useContext(ContextoPelicula);
  const { seleccionarActor } = useContext(ContextoActor);

  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!selectedFilm) {
      setActors([]);
      return;
    }

    let active = true;

    async function loadActors() {
      setLoading(true);
      setError(null);

      try {
        const urls = selectedFilm.characters.slice(0, 10);

        const responses = await Promise.all(
          urls.map((url) => fetch(url))
        );

        const data = await Promise.all(
          responses.map((res) => {
            if (!res.ok) {
              throw new Error("Error cargando actores");
            }
            return res.json();
          })
        );

        if (active) setActors(data);
      } catch (err) {
        if (active) setError(err.message);
      } finally {
        if (active) setLoading(false);
      }
    }

    loadActors();

    return () => {
      active = false;
    };
  }, [selectedFilm]);

  if (!selectedFilm) {
    return <p>Selecciona una película para ver el elenco.</p>;
  }

  return (
    <div>
      <h3>Actores (10 primeros)</h3>

      {loading && <p>Cargando actores...</p>}
      {error && <p>{error}</p>}

      <ul>
        {actors.map((actor) => (
          <li key={actor.url}>
            <button onClick={() => seleccionarActor(actor)}>
              {actor.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaActores;
