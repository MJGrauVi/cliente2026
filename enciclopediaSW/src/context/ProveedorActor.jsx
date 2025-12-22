import { createContext, useState } from "react";
import { traerDatos } from "../../funciones/funciones.js";

//Creamos el contexto para compartir los estados y funciones, (value).
const ContextoActor = createContext();

//Los componentes que esten dentro de este contexto podrán acceder a actor.
const ProveedorActor = ({ children }) => {
  const [selectedActor, setSelectedActor] = useState(null);
  const [vehicles, setVehicles] = useState([]);
  const [loadingVehicles, setLoadingVehicles] = useState(false);
  const [vehiclesError, setVehiclesError] = useState(null);

  //Función para cambiar de actor, evitamos incluir en contexto los setters.
  const seleccionarActor = (actor) => {
    setSelectedActor(actor);
    setVehicles([]);
    setVehiclesError(null);
  };
  // Función para cargar vehículos y naves del actor seleccionado.
  const loadVehicles = async () => {
    if (!selectedActor) return;

    //Obtenemos los vehiculos y naves del actor seleccionado.
    const vehicles = selectedActor.vehicles ?? [];
    const starships = selectedActor.starships ?? [];
    //Unimos las urls.
    const urls = [...vehicles, ...starships];

    if (urls.length === 0) {
      setVehicles([]);
      return;
    }

    //Si carga los vehículos errores a null.
    setLoadingVehicles(true);
    setVehiclesError(null);

    try {
      // Usamos traerDatos para cada URL
      const data = await Promise.all(urls.map((url) => traerDatos(url)));
      setVehicles(data);
    } catch (err) {
      setVehiclesError(err.message);
    } finally {
      setLoadingVehicles(false);
    }
  };

  return (
    <ContextoActor
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
    </ContextoActor>
  );
};

export { ContextoActor, ProveedorActor };
