import { useState } from "react";
import ListaPeliculas from "./componentes/ListaPeliculas.jsx";
import PeliculaDetalle from "./componentes/PeliculaDetalle.jsx";
import Contenedor from "./componentes/Contenedor.jsx";


function App() {
  const [selectedFilm, setSelectedFilm] = useState(null);

  return (
    
      <Contenedor >
        <h1>Enciclopedia Star Wars - React</h1>
        <div className="contenedor">
          <ListaPeliculas onSelectFilm={setSelectedFilm} />
          <PeliculaDetalle film={selectedFilm} />
        </div>
      </Contenedor>
    
  );
}

export default App;
