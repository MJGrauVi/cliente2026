export default function ActorDetalle({ actor }) {
    if (!actor) return null;

    const { name, gender, height, mass, hair_color, eye_color, url } = actor;

    function extractId(url) {
        if (!url) return null;
        const parts = url.split("/").filter(Boolean);
        return parts[parts.length - 1];
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

            {id && (
                <img
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                    alt={name}
                />
            )}
        </div>
    );
}
