import { useState } from "react";
import FilmList from "./componentes/ListaPeliculas.jsx";
import PeliculaDetalle from "./componentes/PeliculaDetalle.jsx";
import Contenedor from "./componentes/Contenedor.jsx";

export default function App() {
  const [selectedFilm, setSelectedFilm] = useState(null);

  return (
    <Contenedor >
      <h1>Enciclopedia de Star Wars versión en React</h1>
      <div className="componentes">
      <FilmList onSelectFilm={setSelectedFilm} />
      <PeliculaDetalle film={selectedFilm} />
      </div>
    </Contenedor>
  );
}
