import { createContext, useState } from "react";

const ContextoPelicula = createContext();

const ProveedorPelicula = ({ children }) => {
  const [selectedFilm, setSelectedFilm] = useState(null);

  return (
    <ProveedorPelicula value={{ selectedFilm, setSelectedFilm }}>
      {children}
    </ProveedorPelicula>
  );
};
export {ContextoPelicula};
export {ProveedorPelicula};