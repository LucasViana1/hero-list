import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useFetchCharacterById from '@services/useFetchCharacterById';
import logoImg from '@assets/logo/Group.png';
import Input from '@components/Input';
import iconBook from '@assets/icones/book/Group.png';
import iconVideo from '@assets/icones/video/Shape.png';
import iconStarFilled from '@assets/review/Path.png';
import iconStarUnfilled from '@assets/review/Path Copy 6.png';

import * as S from './styles';

/**
 * name
 * description
 * total quaqdrinhos
 * total filmes
 * rating (estrelas)
 * ultimo quadrinho (data)
 * ultimos lançamentos (lista com ultimos quadrinhos)
 */

const Character = () => {
  const { search } = useLocation();
  const [, characterId] = search.split('=');
  const { getCharacter } = useFetchCharacterById();

  useEffect(() => {
    getCharacter(characterId || 1009351);
  }, [characterId, getCharacter]);

  return (
    <>
      {/*
      character header
      descrição + status + imagem perfil
      ultimos quadrinhos lançados
    */}
      <S.CharacterHeader>
        <img src={logoImg} alt="Logo Marvel" />
        <div>
          <Input id="search-characters" type="search" placeholder="Procure por heróis" onChange={() => {}} />
        </div>
      </S.CharacterHeader>

      <S.CharacterSection>
        <S.CharacterCol width="40%" isSeparate>
          {/* titulo e botão favorito */}
          <S.CharacterName>
            <h1>hulk</h1>
            <p>favorito</p>
          </S.CharacterName>

          {/* descrição */}
          {/* <div> */}
          <S.CharacterDescription>
            Lorem ipsum ultricies pulvinar pharetra, interdum primis at, odio risus gravida. augue cras praesent taciti
            sodales auctor massa nisi nullam fusce, tempus cubilia class venenatis litora aenean ad amet. class dapibus
            phasellus a fermentum purus gravida, proin nulla ad quam torquent class, libero placerat mi pretium commodo.
            gravida condimentum nisi magna rutrum ut adipiscing enim tempor quis, lobortis etiam urna lacinia risus per
            lobortis class, cursus aliquam quam porta dui non sit curabitur. cras commodo luctus ligula varius gravida
            est aptent id in, ut ad morbi dolor morbi arcu ullamcorper inceptos platea, curabitur nam consequat ad
            bibendum integer ligula curae.
          </S.CharacterDescription>
          {/* </div> */}

          {/* status */}
          <div>
            <S.CharacterQuantity>
              <div>
                <p>Quadrinhos</p>
                <p>
                  <img src={iconBook} alt="Quadrinhos" /> 3000
                </p>
              </div>

              <div>
                <p>Filmes</p>
                <p>
                  <img src={iconVideo} alt="Filmes" /> 40
                </p>
              </div>
            </S.CharacterQuantity>

            <S.CharacterRatingAndLastComic>
              <p>
                <b>Rating:</b>
                <img src={iconStarFilled} alt="Estrela preenchida" />
                <img src={iconStarFilled} alt="Estrela preenchida" />
                <img src={iconStarFilled} alt="Estrela preenchida" />
                <img src={iconStarFilled} alt="Estrela preenchida" />
                <img src={iconStarUnfilled} alt="Estrela não mpreenchida" />
              </p>

              <p>
                <b>Último quadrinho:</b> 13 fev. 2020
              </p>
            </S.CharacterRatingAndLastComic>
          </div>
        </S.CharacterCol>

        <S.CharacterCol width="50%">
          <img
            src="http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0.jpg"
            width="100%"
            alt="thumbnail personagem"
          />
        </S.CharacterCol>
      </S.CharacterSection>

      <S.CharacterSection flexDirection="column">
        <h2>Últimos lançamentos</h2>

        <S.ComicsContainer>
          <S.ComicCard>HQ</S.ComicCard>
          <S.ComicCard>HQ</S.ComicCard>
          <S.ComicCard>HQ</S.ComicCard>
          <S.ComicCard>HQ</S.ComicCard>
          <S.ComicCard>HQ</S.ComicCard>
          <S.ComicCard>HQ</S.ComicCard>
          <S.ComicCard>HQ</S.ComicCard>
          <S.ComicCard>HQ</S.ComicCard>
          <S.ComicCard>HQ</S.ComicCard>
          <S.ComicCard>HQ</S.ComicCard>
          <S.ComicCard>HQ</S.ComicCard>
          <S.ComicCard>HQ</S.ComicCard>
          <S.ComicCard>HQ</S.ComicCard>
          <S.ComicCard>HQ</S.ComicCard>
          <S.ComicCard>HQ</S.ComicCard>
          <S.ComicCard>HQ</S.ComicCard>
          <S.ComicCard>HQ</S.ComicCard>
          <S.ComicCard>HQ</S.ComicCard>
          <S.ComicCard>HQ</S.ComicCard>
          <S.ComicCard>HQ</S.ComicCard>
          <S.ComicCard>HQ</S.ComicCard>
          <S.ComicCard>HQ</S.ComicCard>
        </S.ComicsContainer>
      </S.CharacterSection>
    </>
  );
};

export default Character;
