import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import iconHeartUnfilled from '@assets/icones/heart/Path Copy 2@2x.png';
import iconHeartFilled from '@assets/icones/heart/Path Copy 7@2x.png';
import iconHero from '@assets/icones/heroi/noun_Superhero_2227044@2x.png';
import Switch from '@components/Switch';
import Button from '@components/Button';
import Input from '@components/Input';
import Loader from '@components/Loader';
import CharacterCard from '@components/CharacterCard';
import Logo from '@components/Logo';
import Footer from '@components/Footer';
import Pagination from '@components/Pagination';
import useFetchCharacters from '@services/useFetchCharacters';
import useDebounce from '@utils/useDebounce';
import sortByName from '@utils/sortByName';
import useFavoritesStorage from '@utils/useFavoritesStorage';
import generatePageNumber from '@utils/generatePageNumber';
import * as S from './styles';

const Home = () => {
  const { search } = useLocation();
  const [, characterName] = search.split('=');
  const [searchName, setSearchName] = useState(characterName || '');
  const [filterByFavorite, setFilterByFavorite] = useState(false);
  const [filterByName, setFilterByName] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const { getFavorites } = useFavoritesStorage();
  const debouncedSearchTerm = useDebounce(searchName, 500);
  const {
    getCharacters,
    getFavoritesCharacters,
    charactersData,
    charactersList,
    setCharactersList,
    charactersIsLoading,
    charactersError,
  } = useFetchCharacters();

  useEffect(() => {
    const isRedirect = !!characterName;

    if (!isRedirect) getCharacters(characterName || '');
  }, [characterName, getCharacters]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const initialPage = 1;
      setCurrentPage(initialPage);
      setFilterByName('desc');
      getCharacters(debouncedSearchTerm, initialPage);
    }
  }, [debouncedSearchTerm, getCharacters]);

  const handleSearchCharacters = ({ target: { value } }) => {
    if (value === '') {
      getCharacters('');
      setFilterByName('desc');
    }
    setFilterByFavorite(false);
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

      setSearchName('');
      setFilterByName('desc');

      return newFilterByFavorite;
    });
  };

  const handleFilterByName = (sortTerm) => {
    const currentSortTerm = sortTerm === 'asc' ? 'desc' : 'asc';
    setCharactersList((oldCharactersList) => sortByName(oldCharactersList, sortTerm));
    setFilterByName(currentSortTerm);
  };

  const handlePaginate = useCallback(
    (isNext, customPage = null) => {
      setCurrentPage((oldPage) => {
        const newPage = generatePageNumber(customPage || oldPage, charactersData, isNext);

        if (!debouncedSearchTerm) getCharacters('', newPage);

        setFilterByName('desc');

        return newPage;
      });
    },
    [charactersData, debouncedSearchTerm, getCharacters],
  );

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
            value={searchName}
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

              {charactersList && charactersData && charactersData.count === 0 && (
                <S.ErrorMessage>Nada foi encontrado</S.ErrorMessage>
              )}
            </S.CharactersContainer>
          )}

          {!charactersIsLoading && charactersError && <S.ErrorMessage>{charactersError}</S.ErrorMessage>}
        </S.HomeArticle>
      </S.HomeSection>

      {charactersData && charactersData.total > 60 && (
        <Pagination currentPage={currentPage} charactersData={charactersData} setPage={handlePaginate} />
      )}

      <Footer />
    </>
  );
};

export default Home;
