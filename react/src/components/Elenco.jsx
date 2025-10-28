import React from "react";
import { v4 as uuidV4 } from "uuid";
import Interprete from "./Interprete.jsx";
import {useNavigate} from "react-router-dom";
import "./Elenco.css";

const Elenco = ({ actores }) => {

        const navegar = useNavigate();

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
            <button onClick={()=> navegar("/")}>Volver a Inicio</button>
        </>
    );
};

export default Elenco;
