const CharacterDetail = ({ character }) => {
  const id = character.url.split('/').filter(Boolean).pop();
  const imgUrl = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

  return (
    <article className="character-detail">
      <h4>{character.name}</h4>
      <img src={imgUrl} alt={character.name} />
      <ul>
        <li><strong>Género:</strong> {character.gender}</li>
        <li><strong>Altura:</strong> {character.height} cm</li>
        <li><strong>Peso:</strong> {character.mass} kg</li>
        <li><strong>Color de pelo:</strong> {character.hair_color}</li>
        <li><strong>Color de ojos:</strong> {character.eye_color}</li>
      </ul>
    </article>
  );
};

export default CharacterDetail;
