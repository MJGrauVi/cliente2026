import { useContext } from "react";
import { ContextoCD } from "../context/ProveedorCD.jsx";

//Hook consume y devuelve el contexto.
const useCDs = () => {
  const contexto = useContext(ContextoCD);

  if (!contexto) {
    throw new Error(
      "El hook useCDs debe usarse dentro de <ProveedorCD>."
    );
  }

  return contexto;
};

export default useCDs;
