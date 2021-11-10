import { useCallback, useState } from 'react';
import api from '@services/api';
import md5 from 'md5';

const privateKey = process.env.PRIVATE_KEY;
const publicKey = process.env.PUBLIC_KEY;

const useFetchCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [charactersIsLoading, setCharactersIsLoading] = useState(false);
  const [charactersError, setCharactersError] = useState('');

  const getCharacters = useCallback(async () => {
    setCharactersIsLoading(true);
    setCharactersError('');
    const timestamp = Math.floor(Date.now() / 1000);
    const hash = md5(timestamp + privateKey + publicKey);

    await api
      .get(`/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=20&offset=0`)
      .then(({ data: { data } }) => setCharacters(data))
      .catch((error) => setCharactersError(error.message));
    // nameStartsWith=

    setCharactersIsLoading(false);
  }, []);

  return {
    characters,
    charactersIsLoading,
    charactersError,
    getCharacters,
  };
};

export default useFetchCharacters;
