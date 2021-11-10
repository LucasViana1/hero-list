import { useEffect, useState } from 'react';
import logoImg from '@assets/logo/Group.png';
import iconHeartUnfilled from '@assets/icones/heart/Path Copy 2@2x.png';
import iconHeartFilled from '@assets/icones/heart/Path Copy 7@2x.png';
import iconHero from '@assets/icones/heroi/noun_Superhero_2227044@2x.png';
import useFetchCharacters from '@services/useFetchCharacters';
import Switch from '@components/Switch';
import Button from '@components/Button';
import * as S from './styles';
import CharacterCard from '../../components/CharacterCard';

const Home = () => {
  const [filterByFavorite, setFilterByFavorite] = useState(false);
  const { getCharacters, characters /* , charactersIsLoading, charactersError */ } = useFetchCharacters();

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  console.log(characters);

  const handleFilterByFavorite = () => {
    setFilterByFavorite((oldFilterByFavorite) => !oldFilterByFavorite);
  };

  return (
    <>
      <S.HomeHeader>
        <img src={logoImg} alt="Logo Marvel" />
        <h1>Explore o universo</h1>
      </S.HomeHeader>

      <S.HomeSection>
        <h2>
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você
          descobrirá em breve!
        </h2>

        <S.HomeSearch>
          <input type="search" placeholder="Procure por heróis" />
        </S.HomeSearch>

        <S.HomeFilter>
          <p>Encontrados 20 heróis</p>

          <S.FilterActions>
            <p>
              <img src={iconHero} alt="Herói" width="20" /> Ordenar por nome - A/Z
              <Switch id="switch-filter" name="switch-filter" checked onChange={() => {}} />
            </p>

            <Button onClick={handleFilterByFavorite}>
              <img
                src={filterByFavorite ? iconHeartFilled : iconHeartUnfilled}
                alt="Favorito"
                width="30"
                css={{ marginRigh: '2.25rem' }}
              />
              Somente favoritos
            </Button>
          </S.FilterActions>
        </S.HomeFilter>

        <S.HomeArticle>
          <S.CharactersContainer>
            {characters.results &&
              characters.results.map((character) => <CharacterCard key={character.id} character={character} />)}
          </S.CharactersContainer>
        </S.HomeArticle>
      </S.HomeSection>
    </>
  );
};

export default Home;
