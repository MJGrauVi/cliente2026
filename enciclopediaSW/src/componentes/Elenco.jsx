import { useContext } from "react";
import { ContextoPelicula } from "../context/ProveedorPelicula.jsx";
import ListaActores from "./ListaActoresOK2.jsx";
import ActorDetalle from "./ActorDetalle.jsx";

const Elenco = () => {
  const { selectedFilm } = useContext(ContextoPelicula);

  if (!selectedFilm) return null;

  return (
    <div className="elenco">
      <ListaActores />
      <ActorDetalle />
    </div>
  );
};

export default Elenco;
