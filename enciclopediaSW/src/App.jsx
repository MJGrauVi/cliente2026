import Contenedor from "./componentes/Contenedor.jsx";
import ListaPeliculas from "./componentes/ListaPeliculas.jsx";
import PeliculaInfo from "./componentes/PeliculaInfo.jsx";
import "./App.css";

function App() {
  return (
    <Contenedor>
      <h1>SW Enciclopedia</h1>

      <div className="contenedor-app">
        {/* Columna izquierda */}
        <ListaPeliculas />

        {/* Zona de información */}
        <PeliculaInfo />
      </div>
    </Contenedor>
  );
}

export default App;
