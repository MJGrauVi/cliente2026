import { useEffect, useState } from 'react';
import { getFilms } from './services/swapi.js';
import FilmList from './componentes/FilmList.jsx';
import FilmDetail from './componentes/FilmDetail.jsx';
import './index.css';

function App() {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);

  useEffect(() => {
    const loadFilms = async () => {
      const data = await getFilms();
      setFilms(data);
    };
    loadFilms();
  }, []);

  return (
    <div className="container">
      <h1>Enciclopedia Star Wars</h1>
      <FilmList films={films} onSelect={setSelectedFilm} />
      {selectedFilm && <FilmDetail film={selectedFilm} />}
    </div>
  );
}

export default App;
