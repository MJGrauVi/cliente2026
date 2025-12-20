import { useContext } from "react";
import { FilmContext } from "../context/FilmContext";

const TituloPelicula = () => {
  const { selectedFilm } = useContext(FilmContext);
  if (!selectedFilm) return null;

  return <h2>{selectedFilm.title}</h2>;
};

export default TituloPelicula;
