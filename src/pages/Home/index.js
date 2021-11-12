import { useEffect, useState } from 'react';
import iconHeartUnfilled from '@assets/icones/heart/Path Copy 2@2x.png';
import iconHeartFilled from '@assets/icones/heart/Path Copy 7@2x.png';
import iconHero from '@assets/icones/heroi/noun_Superhero_2227044@2x.png';
import useFetchCharacters from '@services/useFetchCharacters';
import Switch from '@components/Switch';
import Button from '@components/Button';
import useDebounce from '@utils/useDebounce';
import Input from '@components/Input';
import Loader from '@components/Loader';
import sortByName from '@utils/sortByName';
import CharacterCard from '../../components/CharacterCard';
import * as S from './styles';
import Logo from '../../components/Logo';
import useFavoritesStorage from '../../utils/useFavoritesStorage';

const Home = () => {
  const [searchName, setSearchName] = useState(null);
  const [filterByFavorite, setFilterByFavorite] = useState(false);
  const [filterByName, setFilterByName] = useState('desc');
  const { getFavorites } = useFavoritesStorage();
  const {
    getCharacters,
    getFavoritesCharacters,
    charactersData,
    charactersList,
    setCharactersList,
    charactersIsLoading,
    charactersError,
  } = useFetchCharacters();
  const debouncedSearchTerm = useDebounce(searchName, 500);

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  useEffect(() => {
    if (debouncedSearchTerm) getCharacters(debouncedSearchTerm);
  }, [debouncedSearchTerm, getCharacters]);

  const handleSearchCharacters = ({ target: { value } }) => {
    if (value === '') getCharacters();
    setSearchName(value);
  };

  const handleFilterByFavorite = () => {
    setFilterByFavorite((oldFilterByFavorite) => {
      const newFilterByFavorite = !oldFilterByFavorite;

      if (newFilterByFavorite) {
        const favoritesId = getFavorites();
        getFavoritesCharacters(favoritesId);
      } else {
        getCharacters();
      }

      return newFilterByFavorite;
    });
  };

  const handleFilterByName = (sortTerm) => {
    const currentSortTerm = sortTerm === 'asc' ? 'desc' : 'asc';
    setCharactersList((oldCharactersList) => sortByName(oldCharactersList, sortTerm));
    setFilterByName(currentSortTerm);
  };

  return (
    <>
      <S.HomeHeader>
        <Logo />
        <h1>Explore o universo</h1>
      </S.HomeHeader>

      <S.HomeSection>
        <h2>
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você
          descobrirá em breve!
        </h2>

        <S.HomeSearch>
          <Input
            id="search-characters"
            type="search"
            placeholder="Procure por heróis"
            onChange={handleSearchCharacters}
          />
        </S.HomeSearch>

        <S.HomeFilter>
          <p>
            {!charactersIsLoading && !charactersError && charactersData
              ? `Encontrado${charactersData.count === 1 ? '' : 's'} ${charactersData.count} herói${
                  charactersData.count === 1 ? '' : 's'
                }`
              : `Pesquisando... `}

            {charactersError && `Erro!`}
          </p>

          <S.FilterActions>
            <p>
              <img src={iconHero} alt="Herói" width="20" /> Ordenar por nome - A/Z
              <Switch
                id="switch-filter"
                name="switch-filter"
                checked={filterByName === 'asc'}
                onChange={() => handleFilterByName(filterByName)}
              />
            </p>

            <Button onClick={handleFilterByFavorite}>
              <S.FilterFavoriteImg
                src={filterByFavorite ? iconHeartFilled : iconHeartUnfilled}
                alt="Favorito"
                width="30"
              />
              Somente favoritos
            </Button>
          </S.FilterActions>
        </S.HomeFilter>

        <S.HomeArticle>
          {charactersIsLoading && (
            <S.LoaderContainer>
              <Loader />
            </S.LoaderContainer>
          )}

          {!charactersIsLoading && !charactersError && (
            <S.CharactersContainer>
              {charactersList &&
                charactersList.map((character) => <CharacterCard key={character.id} character={character} />)}
            </S.CharactersContainer>
          )}

          {!charactersIsLoading && charactersError && <S.ErrorMessage>{charactersError}</S.ErrorMessage>}
        </S.HomeArticle>
      </S.HomeSection>
    </>
  );
};

export default Home;
