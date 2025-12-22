import { createContext, useState } from "react";

const ContextoPelicula = createContext();

const ProveedorPelicula = ({ children }) => {
  const [selectedFilm, setSelectedFilm] = useState(null);

  // Función que se expone en el contexto
  const seleccionarPelicula = (film) => {
    setSelectedFilm(film);
  };

  return (
    <ContextoPelicula.Provider value={{ selectedFilm, seleccionarPelicula }}>
      {children}
    </ContextoPelicula.Provider>
  );
};

export { ContextoPelicula, ProveedorPelicula };
