import { createContext, useState } from "react";

const ContextoPelicula = createContext();

const ProveedorPelicula = ({ children }) => {
  const [selectedFilm, setSelectedFilm] = useState(null);

return (
  <ContextoPelicula.Provider value={{ selectedFilm, setSelectedFilm }}>
    {children}
  </ContextoPelicula.Provider>
);
};
export {ContextoPelicula};
export {ProveedorPelicula};