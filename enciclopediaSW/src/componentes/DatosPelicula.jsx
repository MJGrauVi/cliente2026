import { useContext } from "react";
import { ContextoPelicula } from "../context/ProveedorPelicula";
import Portada from "./PortadaNo";
import Resumen from "./Resumen";
import Elenco from "./Elenco";

const DatosPelicula = () => {
  const { selectedFilm } = useContext(ContextoPelicula);

  if (!selectedFilm) {
    return (
      <div className="datos-pelicula">
        <p>Selecciona una película del listado para ver la información.</p>
      </div>
    );
  }

  return (
    <div className="datos-pelicula">
      <Portada />
      <Resumen />
      <Elenco />
    </div>
  );
};

export default DatosPelicula;
