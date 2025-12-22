import { useContext } from "react";
import { ContextoActor } from "../context/ProveedorActor.jsx";
import Vehiculos from "./Vehiculos";

const ActorDetalle = () => {
  const {
    selectedActor,
    loadVehicles
  } = useContext(ContextoActor);

  if (!selectedActor) {
    return <p>Selecciona un actor para ver los detalles.</p>;
  }

  return (
    <div className="actorDetalle-contenedor">
      <h3>{selectedActor.name}</h3>

      <p><strong>Género:</strong> {selectedActor.gender}</p>
      <p><strong>Altura:</strong> {selectedActor.height}</p>
      <p><strong>Peso:</strong> {selectedActor.mass}</p>

      <button onClick={loadVehicles}>
        Pilota
      </button>

      <Vehiculos />
    </div>
  );
};

export default ActorDetalle;
