import { createContext, useState } from "react";

const ActorContext = createContext();

const ActorProvider = ({ children }) => {
  const [selectedActor, setSelectedActor] = useState(null);
  const [vehicles, setVehicles] = useState([]);

  return (
    <ActorContext.Provider value={{
      selectedActor,
      setSelectedActor,
      vehicles,
      setVehicles
    }}>
      {children}
    </ActorContext.Provider>
  );
};
export {ActorContext};
export default ActorProvider;