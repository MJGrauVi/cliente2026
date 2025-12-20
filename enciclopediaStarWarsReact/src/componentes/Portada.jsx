import { useContext } from "react";
import { FilmContext } from "../context/FilmContext";

const Portada = () => {
  const { selectedFilm } = useContext(FilmContext);
  if (!selectedFilm) return null;

  return <p>Portada (placeholder)</p>;
};

export default Portada;
