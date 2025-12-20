import { createContext, useState } from "react";

const ActorContext = createContext();

const ActorProvider = ({ children }) => {
  const [selectedActor, setSelectedActor] = useState(null);

  return (
    <ActorContext.Provider value={{
      selectedActor,
      setSelectedActor
    }}>
      {children}
    </ActorContext.Provider>
  );
};
export {ActorContext};
export default ActorProvider;