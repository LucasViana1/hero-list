import { useCallback, useState } from 'react';
import api from './api';
import generateMandatoryQueryString from '../utils/generateMandatoryQueryString';

const useFetchCharacterComics = () => {
  const [comics, setComics] = useState();
  const [comicsIsLoading, setComicsIsLoading] = useState(false);
  const [comicsError, setComicsError] = useState('');

  const getComics = useCallback(async (characterId) => {
    setComicsIsLoading(true);
    setComicsError('');
    const query = generateMandatoryQueryString();

    await api
      .get(`/characters/${characterId}/comics${query}&limit=10&offset=0&orderBy=-onsaleDate`)
      .then(({ data: { data } }) => {
        setComics(data);
      })
      .catch(({ message }) => setComicsError(message || 'Erro ao carregar quadrinhos'));

    setComicsIsLoading(false);
  }, []);

  return {
    getComics,
    comics,
    comicsIsLoading,
    comicsError,
  };
};

export default useFetchCharacterComics;
