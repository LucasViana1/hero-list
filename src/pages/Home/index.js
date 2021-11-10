import { useEffect } from 'react';
import logoImg from '@assets/logo/Group.png';
import useFetchCharacters from '@services/useFetchCharacters';
import * as S from './styles';

const Home = () => {
  const { getCharacters, characters /* , charactersIsLoading, charactersError */ } = useFetchCharacters();

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  console.log(characters);

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
            <p>ICON Ordenar por nome - A/Z SWITCH</p>
            <p>ICON Somente favoritos</p>
          </S.FilterActions>
        </S.HomeFilter>

        <S.HomeArticle>
          {/* card character */}
          <div>
            <p>Start-lord</p>
          </div>
        </S.HomeArticle>
      </S.HomeSection>
    </>
  );
};

export default Home;
