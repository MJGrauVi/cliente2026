import { useContext, useEffect, useState } from "react";
import { ContextoPelicula } from "../context/ProveedorPelicula.jsx";
import { ContextoActor } from "../context/ProveedorActor.jsx";

const ListaActoresCambiado = () => {
  const { selectedFilm } = useContext(ContextoPelicula);
  const { setSelectedActor } = useContext(ContextoActor);
  
  const [actors, setActors] = useState([]);

  useEffect(() => {
    if (!selectedFilm) return;

    Promise.all(
      selectedFilm.characters
        .slice(0, 10)
        .map((url) => fetch(url).then((res) => res.json()))
    ).then(setActors);
  }, [selectedFilm]);

  return (
    <ul>
      {actors.map((actor) => (
        <li key={actor.url}>
          <button onClick={() => setSelectedActor(actor)}>{actor.name}</button>
        </li>
      ))}
    </ul>
  );
};

export default ListaActoresCambiado;
