import { useCallback, useState } from 'react';
import api from '@services/api';
import generateMandatoryQueryString from '../utils/generateMandatoryQueryString';

const useFetchCharacterById = () => {
  const [character, setCharacter] = useState();
  const [characterIsLoading, setCharacterIsLoading] = useState(false);
  const [characterError, setCharacterError] = useState('');

  const getCharacterById = useCallback(async (characterId) => {
    setCharacterIsLoading(true);
    setCharacterError('');

    const query = generateMandatoryQueryString();

    await api
      .get(`/characters/${characterId}${query}`)
      .then(({ data: { data } }) => {
        const [characterInfos] = data.results;
        setCharacter(characterInfos);
      })
      .catch((error) => setCharacterError(error.message));

    setCharacterIsLoading(false);
  }, []);

  return {
    character,
    characterIsLoading,
    characterError,
    getCharacterById,
  };
};

export default useFetchCharacterById;
