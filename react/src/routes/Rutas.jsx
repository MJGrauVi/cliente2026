import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Productos from "../pages/Productos.jsx";
import archivoPeliculas from "../assets/archivoPelis2.json";
import Elenco from "../components/Elenco";
import Galeria from "../components/Galeria.jsx";
import AcercaDe from "../pages/AcercaDe";
import Error from "../pages/Error";

const Rutas = () => {
  const todasLasPeliculas = archivoPeliculas.peliculas;
  

//Si quiero mostrar todos los actores independientemente de en que película actuaron, con flapmap().
const todosLosActores = todasLasPeliculas.flatMap((peli) => peli.actores || []);

  //Con Routes creamos las rutas a cada componente.
  return (
    <div className="contenedor-rutas">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/peliculas" element={<Productos />} />
        <Route path="interpretes" element={<Elenco actores={todosLosActores} />} />
        <Route path="/galeria" element={<Galeria />} />
            <Route>
                <Route path="/galeria/titulo" elemento={CartelTitulo} />
                <Route path="/galeria/interprete" elemento={CartelInterprete} />
                <Route path="/galera/director" elemento={CartelDirector} />
            </Route>
        <Route path="acercade" element={<AcercaDe />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};
export default Rutas;
