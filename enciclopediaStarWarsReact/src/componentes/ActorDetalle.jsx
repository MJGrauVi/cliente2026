import { useContext } from "react";
import { ActorContext } from "../context/ActorContext.jsx";
import "./ActorDetalle.css";

const ActorDetalle = () => {
    const {selectedActor: actor} = useContext(ActorContext);

   /*  if (!actor) return null; */
    if (!actor) return <p>Selecciona un actor para ver sus detalles.</p>;
    const { name, gender, height, mass, hair_color, eye_color, url } = actor;

    // Función para extraer el ID de la URL y construir la imagen
    function extractId(url) {
        if (!url) return null; // evita romper
        const parts = url.split("/").filter(Boolean); //devide la url por el "/", y elimina los espacion en blanco (false de boolean).
        return parts[parts.length - 1]; //Devuelve el indice del último elemento que es el id.
    }
    const id = extractId(url);
    return (

        <div className="actorDetalle-contenedor">

            <h3>{name}</h3>
            <p><strong>Género:</strong> {gender}</p>
            <p><strong>Altura:</strong> {height} cm</p>
            <p><strong>Peso:</strong> {mass} kg</p>
            <p><strong>Color de pelo:</strong> {hair_color}</p>
            <p><strong>Color de ojos:</strong> {eye_color}</p>
            {id && (<img
                src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                alt={name}
                
            />)}

        </div>


    );
};
export default ActorDetalle; 
