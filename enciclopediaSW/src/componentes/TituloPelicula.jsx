import { useContext } from "react";
import { ContextoPelicula } from "../context/ProveedorPelicula.jsx";
import "./TituloPelicula.css";

const TituloPelicula = () => {
  const { selectedFilm } = useContext(ContextoPelicula);
  if (!selectedFilm) return null;

  return (
    <div className="titulo-pelicula">
      <h2>{selectedFilm.title}</h2>
    </div>
  );
};

export default TituloPelicula;
