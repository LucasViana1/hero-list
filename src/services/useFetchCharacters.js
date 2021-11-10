import { useCallback, useState } from 'react';
import api from '@services/api';
import md5 from 'md5';

const privateKey = process.env.PRIVATE_KEY;
const publicKey = process.env.PUBLIC_KEY;

const useFetchCharacters = () => {
  const [charactersData, setCharactersData] = useState();
  const [charactersList, setCharactersList] = useState([]);
  const [charactersIsLoading, setCharactersIsLoading] = useState(false);
  const [charactersError, setCharactersError] = useState('');

  const getCharacters = useCallback(async (searchName = null) => {
    setCharactersIsLoading(true);
    setCharactersError('');
    const timestamp = Math.floor(Date.now() / 1000);
    const hash = md5(timestamp + privateKey + publicKey);

    let query = `?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=20&offset=0`;

    if (searchName) {
      query += `&nameStartsWith=${searchName}`;
    }

    await api
      .get(`/characters${query}`)
      .then(({ data: { data } }) => {
        setCharactersData(data);
        setCharactersList(data.results);
      })
      .catch((error) => setCharactersError(error.message));

    setCharactersIsLoading(false);
  }, []);

  return {
    charactersData,
    charactersList,
    setCharactersList,
    charactersIsLoading,
    charactersError,
    getCharacters,
  };
};

export default useFetchCharacters;
