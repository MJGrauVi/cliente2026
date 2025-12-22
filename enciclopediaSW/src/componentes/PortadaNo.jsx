import { useContext } from "react";
import { ContextoPelicula } from "../context/ProveedorPelicula";

const PortadaNo = () => {
  const { selectedFilm } = useContext(ContextoPelicula);
  if (!selectedFilm) return null;

  return <p>Portada (placeholder)</p>;
};

export default PortadaNo;
