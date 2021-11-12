import { useCallback, useState } from 'react';
import api from '@services/api';
import md5 from 'md5';

const privateKey = process.env.PRIVATE_KEY;
const publicKey = process.env.PUBLIC_KEY;

const useFetchcomicsComics = () => {
  const [comics, setComics] = useState();
  const [comicsIsLoading, setComicsIsLoading] = useState(false);
  const [comicsError, setComicsError] = useState('');
  const currentYear = new Date().getFullYear();

  const getComics = useCallback(
    async (characterId) => {
      setComicsIsLoading(true);
      setComicsError('');
      const timestamp = Math.floor(Date.now() / 1000);
      const hash = md5(timestamp + privateKey + publicKey);

      const query = `?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=10&offset=0`;

      await api
        .get(`/characters/${characterId}/comics${query}&startYear=${currentYear}`)
        .then(({ data: { data } }) => {
          setComics(data);
        })
        .catch((error) => setComicsError(error.message));

      setComicsIsLoading(false);
    },
    [currentYear],
  );

  return {
    comics,
    comicsIsLoading,
    comicsError,
    getComics,
  };
};

export default useFetchcomicsComics;
