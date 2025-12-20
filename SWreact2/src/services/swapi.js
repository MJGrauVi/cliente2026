const BASE_URL = 'https://swapi.info/api';

export const getFilms = async () => {
  const res = await fetch(`${BASE_URL}/films`);
  const data = await res.json();
  return data.results || data;
};

export const getCharacter = async (url) => {
  const res = await fetch(url);
  return await res.json();
};
