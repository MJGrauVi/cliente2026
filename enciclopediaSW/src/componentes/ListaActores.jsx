import { useContext, useEffect, useState } from "react";
import { ContextoPelicula } from "../context/ProveedorPelicula.jsx";
import { ContextoActor } from "../context/ProveedorActor.jsx";
import { traerDatos } from "../funciones/funciones.js";

const ListaActores = () => {
  // Funciones que se utilizan en el contexto.
  const { selectedFilm } = useContext(ContextoPelicula);
  const { seleccionarActor } = useContext(ContextoActor);

  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => { //se ejecuta cada vez que camdia selectedFilm, dependencia[selectedFilm].
    if (!selectedFilm) {
      setActors([]);
      return;
    }

    let active = true;//Evita que se actualice el estado del componente cuando ya no existe.

     const loadActors = async () => {
      setLoading(true);
      setError(null);

      try {
        const urls = selectedFilm.characters.slice(0, 10);

        // Usando traerDatos en lugar de fetch directo
        const data = await Promise.all(urls.map((url) => traerDatos(url)));

        if (active) setActors(data);//Actualiza el estado si el componente está montado.
      } catch (err) {
        if (active) setError(err.message);
      } finally {
        if (active) setLoading(false);
      }
    }

    loadActors();

    return () => {
      active = false;//Cambia a false cuando se desmonta el componente(cambia SelectedFilm).
    };
  }, [selectedFilm]);

  const manejarClic = (e) => {
    if (e.target.tagName !== "BUTTON") return;

    const url = e.target.dataset.url;
    const actor = actors.find((a) => a.url === url);

    if (actor) {
      seleccionarActor(actor);
    }
  };

  if (!selectedFilm) return null;

  return (
    <div>
      <h3>Actores (10 primeros)</h3>

      {loading && <p>Cargando actores...</p>}
      {error && <p>{error}</p>}

      <ul onClick={manejarClic}>
        {actors.map((actor) => (
          <li key={actor.url}>
            <button data-url={actor.url}>
              {actor.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaActores;
