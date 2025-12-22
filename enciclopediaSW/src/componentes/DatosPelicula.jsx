import Portada from "./Portada";
import Resumen from "./Resumen";
import Elenco from "./Elenco";
import "./DatosPelicula.css";

const DatosPelicula = () => {
  return (
    <div className="datos-pelicula">
      <Portada />
      <Resumen />
      <Elenco />
    </div>
  );
};

export default DatosPelicula;
