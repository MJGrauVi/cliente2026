import { useContext } from "react";
import { FilmContext } from "../context/FilmContext";

const Resumen = () => {
  const { selectedFilm } = useContext(FilmContext);
  if (!selectedFilm) return null;

  return <p>{selectedFilm.opening_crawl}</p>;
};

export default Resumen;
