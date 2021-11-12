import { useCallback, useState } from 'react';
import api from '@services/api';
import axios from 'axios';
import generateMandatoryQueryString from '@utils/generateMandatoryQueryString';

const useFetchCharacters = () => {
  const [charactersData, setCharactersData] = useState();
  const [charactersList, setCharactersList] = useState([]);
  const [charactersIsLoading, setCharactersIsLoading] = useState(false);
  const [charactersError, setCharactersError] = useState('');

  const getCharacters = useCallback(async (searchName = null) => {
    setCharactersIsLoading(true);
    setCharactersError('');

    let query = `${generateMandatoryQueryString()}&limit=20&offset=0`;

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
