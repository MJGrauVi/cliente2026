import { createContext, useState } from "react";

const FilmContext = createContext();

const FilmProvider = ({ children }) => {
  const [selectedFilm, setSelectedFilm] = useState(null);

  return (
    <FilmContext.Provider value={{ selectedFilm, setSelectedFilm }}>
      {children}
    </FilmContext.Provider>
  );
};
export {FilmContext};
export {FilmProvider};