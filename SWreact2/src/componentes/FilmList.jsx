const FilmList = ({ films = [], onSelect }) => {
  return (
    <ul className="film-list">
      {films.map(film => (
        <li key={film.episode_id}>
          <button onClick={() => onSelect(film)}>
            Episodio {film.episode_id}: {film.title}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FilmList;
