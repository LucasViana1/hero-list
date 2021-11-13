import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useFetchCharacterComics from '@services/useFetchCharacterComics';
import Input from '@components/Input';
import iconBook from '@assets/icones/book/Group.png';
import iconVideo from '@assets/icones/video/Shape.png';
import iconStar from '@assets/review/Group 4.png';
import iconHeartUnfilled from '@assets/icones/heart/Path Copy 2@2x.png';
import iconHeartFilled from '@assets/icones/heart/Path Copy 7@2x.png';
import Button from '@components/Button';
import Logo from '@components/Logo';
import Loader from '@components/Loader';
import formatDate from '@utils/formatDate';
import useFavoritesStorage from '@utils/useFavoritesStorage';
import Footer from '@components/Footer';
import * as S from './styles';

const Character = () => {
  const {
    search,
    state: { name, description, imageUrl },
  } = useLocation();
  const router = useHistory();
  const { getComics, comics, comicsIsLoading, comicsError } = useFetchCharacterComics();
  const { verifyFavorite, updateFavorites, getFavorites } = useFavoritesStorage();
  const [, characterId] = search.split('=');
  const [isFavorite, setIsFavorite] = useState(verifyFavorite(characterId));
  const [characterName, setCharacterName] = useState('');

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    getComics(characterId, currentYear);
  }, [characterId, getComics]);

  const handleAddToFavorite = useCallback(() => {
    setIsFavorite((oldIsFavorite) => {
      const favorites = getFavorites();

      updateFavorites(oldIsFavorite, characterId);

      return favorites.length < 5 ? !oldIsFavorite : oldIsFavorite;
    });
  }, [characterId, getFavorites, updateFavorites]);

  const handleSearchCharacter = ({ key }) => {
    if (key === 'Enter') {
      router.push('/', { characterName });
    }
  };

  const handleChange = ({ target: { value } }) => setCharacterName(value);

  const dateLastComic = useMemo(() => {
    if (comics && comics.results.length > 0) {
      const [comic] = comics.results;
      const saleDate = comic.dates.find((date) => date.type === 'onsaleDate');
      return saleDate.date || null;
    }

    return null;
  }, [comics]);

  return (
    <>
      <S.CharacterHeader>
        <Logo />
        <div>
          <Input
            id="search-characters"
            type="search"
            kind="light"
            placeholder="Procure por heróis"
            value={characterName}
            onKeyPress={handleSearchCharacter}
            onChange={handleChange}
          />
        </div>
      </S.CharacterHeader>

      <S.CharacterSection>
        <S.CharacterCol width="40%" isSeparate>
          <S.CharacterName>
            <h1>{name}</h1>
            <Button onClick={handleAddToFavorite} minWidth="1rem" margin="0">
              <img src={isFavorite ? iconHeartFilled : iconHeartUnfilled} alt="Favoritar" />
            </Button>
          </S.CharacterName>

          <S.CharacterDescription>{description || 'Descrição não encontrada'}</S.CharacterDescription>

          <div>
            <S.CharacterQuantity>
              <div>
                <p>Quadrinhos</p>
                <p>
                  <img src={iconBook} alt="Quadrinhos" />
                  {comicsIsLoading && <Loader size="small" />}
                  {!comicsIsLoading && comics && comics.total}
                </p>
              </div>

              <div>
                <p>Filmes</p>
                <p>
                  <img src={iconVideo} alt="Filmes" />
                </p>
              </div>
            </S.CharacterQuantity>

            <S.CharacterRatingAndLastComic>
              <p>
                <b>Rating:</b>
                <img src={iconStar} alt="Avaliação" />
              </p>

              <p>
                <b>Último quadrinho:</b>
                {comicsIsLoading && <Loader size="small" />}
                {!comicsIsLoading && !comicsError && formatDate(dateLastComic)}
              </p>
            </S.CharacterRatingAndLastComic>
          </div>
        </S.CharacterCol>

        <S.CharacterCol width="50%">
          <img src={`${imageUrl}`} width="100%" alt="foto personagem" />
        </S.CharacterCol>
      </S.CharacterSection>

      <S.CharacterSection flexDirection="column">
        <h2>Últimos lançamentos</h2>

        <S.ComicsContainer>
          {comicsIsLoading && <Loader />}

          {!comicsIsLoading &&
            comics &&
            comics.results &&
            !comicsError &&
            comics.results.map((comic) => (
              <S.ComicCard key={comic.id}>
                <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
                <p title={comic.title}>{comic.title}</p>
              </S.ComicCard>
            ))}

          {!comicsIsLoading && comicsError && <S.ErrorMessage>{comicsError}</S.ErrorMessage>}
        </S.ComicsContainer>
      </S.CharacterSection>

      <Footer />
    </>
  );
};

export default Character;
