import Contenedor from "./Contenedor.jsx";
import "./ActorDetalle.css";
// ActorDetalle.jsx
export default function ActorDetalle({ actor }) {
    if (!actor) return null;

    // Función para extraer el ID de la URL y construir la imagen
    function extractId(url) {
        const parts = url.split("/").filter(Boolean);
        return parts[parts.length - 1];
    }

    return (

        <div className="actorDetalle-contenedor">

            <h3>{actor.name}</h3>
            <p><strong>Género:</strong> {actor.gender}</p>
            <p><strong>Altura:</strong> {actor.height} cm</p>
            <p><strong>Peso:</strong> {actor.mass} kg</p>
            <p><strong>Color de pelo:</strong> {actor.hair_color}</p>
            <p><strong>Color de ojos:</strong> {actor.eye_color}</p>
            <img
                src={`https://starwars-visualguide.com/assets/img/characters/${extractId(actor.url)}.jpg`}
                alt={actor.name}
                
            />

        </div>


    );
}
