import { useContext } from "react";
import { ContextoActor } from "../context/ProveedorActor.jsx";

const Vehiculos = () => {
  const {
    vehicles,
    loadingVehicles,
    vehiclesError
  } = useContext(ContextoActor);

  if (loadingVehicles) {
    return <p>Cargando vehículos y naves...</p>;
  }

  if (vehiclesError) {
    return <p>{vehiclesError}</p>;
  }

  if (vehicles.length === 0) {
    return <p>No pilota vehículos ni naves.</p>;
  }

  return (
    <div className="vehiculos">
      <h4>Vehículos / Naves</h4>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle.url}>
            <strong>{vehicle.name}</strong><br />
            Modelo: {vehicle.model}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Vehiculos;
