import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
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
import * as S from './styles';
import formatDate from '../../utils/formatDate';

const Character = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const {
    search,
    state: { name, description, imageUrl },
  } = useLocation();

  const [, characterId] = search.split('=');
  const { getComics, comics, comicsIsLoading, comicsError } = useFetchCharacterComics();

  useEffect(() => {
    getComics(characterId);
  }, [characterId, getComics]);

  const handleAddToFavorite = () => {
    setIsFavorite((oldIsFavorite) => !oldIsFavorite);
  };

  const dateLastComic = useMemo(() => {
    if (comics) {
      const [comic] = comics.results;
      const saleDate = comic.dates.find((date) => date.type === 'onsaleDate');
      return saleDate.date || 'Data não encontrada';
    }

    return 'Data não encontrada';
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
            onChange={() => {}}
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
          <img src={imageUrl} width="100%" alt="foto personagem" />
        </S.CharacterCol>
      </S.CharacterSection>

      <S.CharacterSection flexDirection="column">
        <h2>Últimos lançamentos</h2>

        <S.ComicsContainer>
          {comicsIsLoading && <Loader />}

          {!comicsIsLoading &&
            comics &&
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
    </>
  );
};

export default Character;
