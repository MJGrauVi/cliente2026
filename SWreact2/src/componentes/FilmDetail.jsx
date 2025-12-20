import CharacterList from './CharacterList';

const FilmDetail = ({ film }) => {
  const releaseDate = new Date(film.release_date).toLocaleDateString('es-ES');

  return (
    <section className="film-detail">
      <h2>{film.title}</h2>
      <p className="opening">{film.opening_crawl}</p>

      <ul>
        <li><strong>Director:</strong> {film.director}</li>
        <li><strong>Productor:</strong> {film.producer}</li>
        <li><strong>Fecha de estreno:</strong> {releaseDate}</li>
      </ul>

      <CharacterList characters={film.characters.slice(0, 10)} />
    </section>
  );
};

export default FilmDetail;
