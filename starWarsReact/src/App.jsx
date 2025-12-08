import { useState } from "react";
import FilmList from "./componentes/FilmList.jsx";
import FilmDetail from "./componentes/FilmDetail";
import Contenedor from "./componentes/Contenedor.jsx";

export default function App() {
  const [selectedFilm, setSelectedFilm] = useState(null);

  return (
    <Contenedor >
      <FilmList onSelectFilm={setSelectedFilm} />
      <FilmDetail film={selectedFilm} />
    </Contenedor>
  );
}
