import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFetchCharacterById from '@services/useFetchCharacterById';
import Input from '@components/Input';
import iconBook from '@assets/icones/book/Group.png';
import iconVideo from '@assets/icones/video/Shape.png';
import iconStar from '@assets/review/Group 4.png';
import iconHeartUnfilled from '@assets/icones/heart/Path Copy 2@2x.png';
import iconHeartFilled from '@assets/icones/heart/Path Copy 7@2x.png';
import Button from '@components/Button';
import * as S from './styles';
import Logo from '../../components/Logo';

/**
 * name
 * description
 * total quaqdrinhos -> pegar de characters/:id/comics (data.total)
 * ultimo quadrinho (data) -> primeiro item do array de ultimos lançamentos (dates -> type onsaleDate)
 * ultimos lançamentos (lista com ultimos quadrinhos) -> characters/:id/comics
 */

const Character = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { search } = useLocation();
  const [, characterId] = search.split('=');
  const { getCharacter } = useFetchCharacterById();

  useEffect(() => {
    getCharacter(characterId || 1009351);
  }, [characterId, getCharacter]);

  const handleAddToFavorite = () => {
    setIsFavorite((oldIsFavorite) => !oldIsFavorite);
  };

  return (
    <>
      {/*
      character header
      descrição + status + imagem perfil
      ultimos quadrinhos lançados
    */}
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
            <h1>hulk</h1>
            <Button onClick={handleAddToFavorite} minWidth="1rem" margin="0">
              <img src={isFavorite ? iconHeartFilled : iconHeartUnfilled} alt="Favoritar" />
            </Button>
          </S.CharacterName>

          <S.CharacterDescription>
            Lorem ipsum ultricies pulvinar pharetra, interdum primis at, odio risus gravida. augue cras praesent taciti
            sodales auctor massa nisi nullam fusce, tempus cubilia class venenatis litora aenean ad amet. class dapibus
            phasellus a fermentum purus gravida, proin nulla ad quam torquent class, libero placerat mi pretium commodo.
            gravida condimentum nisi magna rutrum ut adipiscing enim tempor quis, lobortis etiam urna lacinia risus per
            lobortis class, cursus aliquam quam porta dui non sit curabitur. cras commodo luctus ligula varius gravida
            est aptent id in, ut ad morbi dolor morbi arcu ullamcorper inceptos platea, curabitur nam consequat ad
            bibendum integer ligula curae.
          </S.CharacterDescription>

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
