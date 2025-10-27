import "./App.css";
import { Routes, Route } from "react-router-dom";
import Menu from "./routes/Menu.jsx";
import Rutas from "./routes/Rutas.jsx";
import Contenedor from "./estructura/Contenedor.jsx";
import Header from "./estructura/Header.jsx";
import MenuNavegacion from "./estructura/MenuNavegacion.jsx";
import Footer from "./estructura/Footer.jsx";


const App = () => {
  return (
    <div className="contenedor-app">
      <Header>
        <h2>Gestión películas</h2>
        <p>Rutas en React con react-router-dom.</p>

      </Header>
      <MenuNavegacion>
        <Menu />
      </MenuNavegacion>
      <Contenedor>
        <Rutas />
      </Contenedor>
      <Footer>
        <p>Pie de Página</p>
      </Footer>

    </div>
  );
};

export default App;
