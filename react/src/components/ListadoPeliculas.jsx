import React from "react";
import "./ListadoPeliculas.css";
import { Link, useNavigate } from "react-router-dom";
import BotonNavegar from "../estructura/BotonNavegar.jsx";

const ListadoPeliculas = ({ peliculas }) => {

    const navegar = useNavigate();
    if (!Array.isArray(peliculas) || peliculas.length === 0) {
        return <h3>No hay películas disponibles.</h3>;
    }
    return (
        <div className="listadoPeliculas-contenedor">
            <h2>Listado Películas</h2>
            <ul className="listadoPelis-miniatura">{/*Cargar el componente de la pelicula */}
                {peliculas.map((peli) => (
                    <li key={peli.id}>
                        <Link to={`/peliculas/${peli.id}`} className="pelicula-link">
                            {peli.cartelera ? (
                                <img src={peli.cartelera} alt={`Cartel de ${peli.nombre}`} />
                            ) : (
                                <p>Imagen no disponible.</p>
                            )}
                            <h2>Título:  {peli.nombre || "Título no disponible"}</h2>

                            {peli.año ? (
                                <p><strong> Año exhibición:</strong> {peli.año}</p>
                            ) : (
                                <p><strong>Año exibición:</strong> No existe el dato.</p>
                            )}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* <button onClick={()=> navegar("/")}>Volver a Inicio</button> */}
            <BotonNavegar ruta="/" texto="Volve Inicio" />
        </div>
    );
};

export default ListadoPeliculas;
