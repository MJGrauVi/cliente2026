import { useContext } from "react";
import { ActorContext } from "../context/ActorContext";
import Vehiculos from "./Vehiculos";

const ActorDetalle = () => {
  const { selectedActor } = useContext(ActorContext);
  if (!selectedActor) return null;

  return (
    <div>
      <h3>{selectedActor.name}</h3>
      <button>🚀 Pilota</button>
      <Vehiculos />
    </div>
  );
};

export default ActorDetalle;
