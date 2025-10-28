import React from "react";
import "./ListadoPeliculas.css";

const ListadoPeliculas = ({ peliculas }) => {
    if (!Array.isArray(peliculas) || peliculas.length === 0) {
        return <h3>No hay películas disponibles.</h3>;
    }
    return (
        <div>
            <h2>Listado Películas</h2>
            <ul className="listadoPelis-miniatura" onClick={()=>()}>{/*Cargar el componente de la pelicula */}
                {peliculas.map((peli) => (
                    <li key={peli.id}>
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
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListadoPeliculas;
