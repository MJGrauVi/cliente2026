import { createContext, useState } from "react";

const ContextoActor = createContext();

const ProveedorActor = ({ children }) => {
  const [selectedActor, setSelectedActor] = useState(null);
  const [vehicles, setVehicles] = useState([]);
  const [loadingVehicles, setLoadingVehicles] = useState(false);
  const [vehiclesError, setVehiclesError] = useState(null);

  const seleccionarActor = (actor) => {
    setSelectedActor(actor);
    setVehicles([]);
    setVehiclesError(null);
  };

  const loadVehicles = async () => {
    if (!selectedActor) return;

    const vehicles = selectedActor.vehicles ?? [];
    const starships = selectedActor.starships ?? [];
    const urls = [...vehicles, ...starships];

    if (urls.length === 0) {
      setVehicles([]);
      return;
    }

    setLoadingVehicles(true);
    setVehiclesError(null);

    try {
      const responses = await Promise.all(urls.map((url) => fetch(url)));

      const data = await Promise.all(
        responses.map((res) => {
          if (!res.ok) {
            throw new Error("Error cargando vehículos");
          }
          return res.json();
        })
      );

      setVehicles(data);
    } catch (err) {
      setVehiclesError(err.message);
    } finally {
      setLoadingVehicles(false);
    }
  };

  return (
    <ContextoActor.Provider
      value={{
        selectedActor,
        seleccionarActor,
        vehicles,
        loadVehicles,
        loadingVehicles,
        vehiclesError,
      }}
    >
      {children}
    </ContextoActor.Provider>
  );
};

export { ContextoActor, ProveedorActor };
