import { useCallback, useState } from 'react';
import axios from 'axios';
import generateMandatoryQueryString from '@utils/generateMandatoryQueryString';
import api from './api';

const limit = 20;

const useFetchCharacters = () => {
  const [charactersData, setCharactersData] = useState();
  const [charactersList, setCharactersList] = useState([]);
  const [charactersIsLoading, setCharactersIsLoading] = useState(false);
  const [charactersError, setCharactersError] = useState('');

  const getCharacters = useCallback(async (searchName, page = 1) => {
    setCharactersIsLoading(true);
    setCharactersError('');
    const offset = (page - 1) * limit;

    let query = `${generateMandatoryQueryString()}&limit=${limit}&offset=${offset}`;

    if (searchName) query += `&nameStartsWith=${searchName}`;

    await api
      .get(`/characters${query}`)
      .then(({ data: { data } }) => {
        setCharactersData(data);
        setCharactersList(data.results);
      })
      .catch(({ message }) => setCharactersError(message || 'Erro ao carregar personagens'));

    setCharactersIsLoading(false);
  }, []);

  const getFavoritesCharacters = useCallback((favoritesId) => {
    setCharactersIsLoading(true);
    setCharactersError('');

    if (favoritesId.length === 0) {
      setCharactersError('Nada foi encontrado');
      setCharactersIsLoading(false);
      return;
    }

    const query = generateMandatoryQueryString();

    const requests = favoritesId.map((favoriteId) => api.get(`/characters/${favoriteId}${query}&limit=20&offset=0`));

    axios
      .all(requests)
      .then((response) => {
        const results = response.reduce((acc, current) => {
          const [character] = current.data.data.results;
          return [...acc, character];
        }, []);

        setCharactersData({ count: results.length });
        setCharactersList(results);
      })
      .catch(({ message }) => setCharactersError(message || 'Erro ao carregar personagens favoritos'))
      .finally(() => setCharactersIsLoading(false));
  }, []);

  return {
    charactersData,
    charactersList,
    setCharactersList,
    charactersIsLoading,
    charactersError,
    getCharacters,
    getFavoritesCharacters,
  };
};

export default useFetchCharacters;
