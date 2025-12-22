import { useContext } from "react";
import { ContextoPelicula } from "../context/ProveedorPelicula";

const Portada = () => {
  const { selectedFilm } = useContext(ContextoPelicula);
  if (!selectedFilm) return null;

  return <p>Portada (placeholder)</p>;
};

export default Portada;
