import { useEffect, useState } from 'react';
import { getCharacter } from '../services/swapi';
import CharacterDetail from './CharacterDetail';

const CharacterList = ({ characters }) => {
  const [people, setPeople] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const loadCharacters = async () => {
      const data = await Promise.all(
        characters.map(url => getCharacter(url))
      );
      setPeople(data);
    };
    loadCharacters();
  }, [characters]);

  return (
    <>
      <h3>Protagonistas</h3>
      <ul className="character-list">
        {people.map(person => (
          <li key={person.name}>
            <button onClick={() => setSelected(person)}>
              {person.name}
            </button>
          </li>
        ))}
      </ul>

      {selected && <CharacterDetail character={selected} />}
    </>
  );
};

export default CharacterList;
