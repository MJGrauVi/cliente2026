import React from "react";
import { v4 as uuidV4 } from "uuid";
import Interprete from "./Interprete.jsx";

const Elenco = ({ actores }) => {
    if (!Array.isArray(actores) || actores.length === 0) {
        return <p>No hay actores disponibles.</p>;
    }
    return (
        <>
            <div>
                <h2 className="elenco-contenedor">Elenco:</h2>
                <ul>
                    {actores.map((actor) => (
                        <li key={uuidV4()}>
                            <Interprete nombre={actor.nombre} foto={actor.foto}>
                                {actor.bio}
                            </Interprete>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Elenco;
