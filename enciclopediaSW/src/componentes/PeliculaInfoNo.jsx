import { useContext } from "react";
import { ContextoPelicula } from "../context/ProveedorPelicula.jsx";
import TituloPelicula from "./TituloPelicula.jsx";
import DatosPelicula from "./DatosPelicula.jsx";
import "./PeliculaInfo.css";

const PeliculaInfoNo = () => {
  const { selectedFilm } = useContext(ContextoPelicula);

  if (!selectedFilm) {
    return (
      <div className="pelicula-info">
        <h2>Selecciona una película</h2>
        <p>Haz clic en una película de la lista para ver los detalles.</p>
      </div>
    );
  }

  return (
    <div className="pelicula-info">
      <TituloPelicula />
      <DatosPelicula />
    </div>
  );
};

export default PeliculaInfoNo;
