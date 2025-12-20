import { useContext } from "react";
import { ActorContext } from "../context/ActorContext";

const Vehiculos = () => {
  const { vehicles } = useContext(ActorContext);

  if (vehicles.length === 0) {
    return <p>No pilota vehículos ni naves.</p>;
  }

  return (
    <ul>
      {vehicles.map(v => (
        <li key={v.url}>{v.name}</li>
      ))}
    </ul>
  );
};

export default Vehiculos;
