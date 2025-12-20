import { useContext, useEffect, useState } from "react";
import { FilmContext } from "../context/FilmContext";
import { ActorContext } from "../context/ActorContext";

const ListaActores = () => {
  const { selectedFilm } = useContext(FilmContext);
  const { setSelectedActor } = useContext(ActorContext);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    if (!selectedFilm) return;

    Promise.all(
      selectedFilm.characters.slice(0, 10).map(url =>
        fetch(url).then(res => res.json())
      )
    ).then(setActors);
  }, [selectedFilm]);

  return (
    <ul>
      {actors.map(actor => (
        <li key={actor.url}>
          <button onClick={() => setSelectedActor(actor)}>
            {actor.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ListaActores;
