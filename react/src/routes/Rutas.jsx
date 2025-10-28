import React from "react";
import { Routes, Route } from "react-router-dom";
import archivoPeliculas from "../assets/archivoPelis2.json";
import Inicio from "../pages/Inicio.jsx";
import DetallePelicula from "../components/DetallePelicula.jsx";
import Elenco from "../components/Elenco.jsx";
import Galeria from "../components/Galeria.jsx";
import GaleriaDirector from "../pages/subMenu/GaleriaDirector.jsx";
import GaleriaInterprete from "../pages/subMenu/GaleriaInterprete.jsx";
import GaleriaTitulo from "../pages/subMenu/GaleriaTitulo.jsx";
import AcercaDe from "../pages/AcercaDe.jsx";
import Error from "../pages/Error.jsx";
import ListadoPeliculas from "../components/ListadoPeliculas.jsx";

const Rutas = () => {
  const todasLasPeliculas = archivoPeliculas.peliculas;
  //Si quiero mostrar todos los actores independientemente de en que película actuaron, con flapmap().
  //flapMap allana y devuelve un array con todos los actores de todas la paliculas.
  const todosLosActores = todasLasPeliculas.flatMap(
    (peli) => peli.actores || []
  );
  //Mostrar todas las carteleras.
  //He creado un componente Carteleras las recoge todas mara mostrarlo en el menú Galeria.

  //Con Routes creamos las rutas a cada componente, le indicamos el path y que componente debe cargar.
  return (
    <div className="contenedor-rutas">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route
          path="/peliculas"
          element={<ListadoPeliculas peliculas={todasLasPeliculas} />}
        />
        <Route path="/peliculas/:id" element={<DetallePelicula />} />
        <Route
          path="interpretes"
          element={<Elenco actores={todosLosActores} />}
        />
        <Route path="/galeria" element={<Galeria />}>
          {/* Rutas para el submenú galeria cartelera. */}
          <Route path="titulo" element={<GaleriaTitulo />} />
          <Route path="actor" element={<GaleriaInterprete />} />
          <Route path="director" element={<GaleriaDirector />} />
        </Route>
        <Route path="acercade" element={<AcercaDe />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};
export default Rutas;
