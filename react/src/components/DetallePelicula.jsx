import Contenedor from "./Contenedor.jsx";
import Pelicula from "./Pelicula.jsx";
import { useParams } from "react-router-dom";
import archivoPelis from "../assets/archivoPelis2.json";

const DetallePelicula = () => {
    const { id } = useParams();
    const pelicula = archivoPelis.peliculas.find(
        (peli) => peli.id.toString() === id);

    if (!pelicula) {
        return <p>Película no encontrada.</p>
    }
    return (
        <Contenedor>
            <div className="detallePelicula-detalle">
                <Pelicula datos={pelicula}>{pelicula.resumen}</Pelicula>
            </div>
        </Contenedor>
    );
};
export default DetallePelicula;