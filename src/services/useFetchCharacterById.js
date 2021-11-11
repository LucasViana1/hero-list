import { useCallback, useState } from 'react';
import api from '@services/api';
import md5 from 'md5';

const privateKey = process.env.PRIVATE_KEY;
const publicKey = process.env.PUBLIC_KEY;

const useFetchCharacterById = () => {
  const [character, setCharacter] = useState();
  const [characterIsLoading, setCharacterIsLoading] = useState(false);
  const [characterError, setCharacterError] = useState('');

  const getCharacter = useCallback(async (characterId) => {
    setCharacterIsLoading(true);
    setCharacterError('');
    const timestamp = Math.floor(Date.now() / 1000);
    const hash = md5(timestamp + privateKey + publicKey);

    const query = `?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=20&offset=0`;

    await api
      .get(`/characters/${characterId}${query}`)
      .then(({ data: { data } }) => {
        setCharacter(data);
      })
      .catch((error) => setCharacterError(error.message));

    setCharacterIsLoading(false);
  }, []);

  return {
    character,
    characterIsLoading,
    characterError,
    getCharacter,
  };
};

export default useFetchCharacterById;
