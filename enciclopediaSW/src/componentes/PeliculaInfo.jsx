import TituloPelicula from "./TituloPelicula";
import DatosPelicula from "./DatosPelicula";
import "./PeliculaInfo.css";

const PeliculaInfo = () => {
  return (
    <div className="pelicula-info">
      <TituloPelicula />
      <DatosPelicula />
    </div>
  );
};

export default PeliculaInfo;
