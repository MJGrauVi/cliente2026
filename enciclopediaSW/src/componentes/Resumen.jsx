import { useContext } from "react";
import { ContextoPelicula } from "../context/ProveedorPelicula";

const Resumen = () => {
  const { selectedFilm } = useContext(ContextoPelicula);
  if (!selectedFilm) return null;

  return (
    <div className="resumen">
      <p>{selectedFilm.opening_crawl}</p>
    </div>
  );
};

export default Resumen;
