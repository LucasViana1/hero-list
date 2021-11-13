import { memo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import iconHeartUnfilled from '@assets/icones/heart/Path Copy 2@2x.png';
import iconHeartFilled from '@assets/icones/heart/Path Copy 7@2x.png';
import useFavoritesStorage from '@utils/useFavoritesStorage';
import Button from '../Button';
import * as S from './styles';

const CharacterCard = ({ character }) => {
  const router = useHistory();
  const { verifyFavorite, updateFavorites, getFavorites } = useFavoritesStorage();
  const {
    id,
    name,
    description,
    thumbnail: { extension, path },
  } = character;
  const imageUrl = `${path}.${extension}`;
  const [isFavorite, setIsFavorite] = useState(verifyFavorite(id));

  const handleChangeToFavorite = useCallback(() => {
    setIsFavorite((oldIsFavorite) => {
      const favorites = getFavorites();
      updateFavorites(oldIsFavorite, id);

      return favorites.length < 5 ? !oldIsFavorite : oldIsFavorite;
    });
  }, [getFavorites, id, updateFavorites]);

  const handleNavigationToCharacter = () => router.push(`/personagem?id=${id}`, { name, description, imageUrl });

  return (
    <S.CharacterCard>
      <S.CharacterThumbnail
        role="button"
        tabIndex="0"
        onKeyPress={handleNavigationToCharacter}
        onClick={handleNavigationToCharacter}
      >
        <img src={imageUrl} alt={name} />
      </S.CharacterThumbnail>

      <S.CharacterInfos>
        <p title={name}>{name}</p>
        <Button onClick={handleChangeToFavorite} minWidth="1rem">
          <img src={isFavorite ? iconHeartFilled : iconHeartUnfilled} alt="Favoritar" />
        </Button>
      </S.CharacterInfos>
    </S.CharacterCard>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      extension: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default memo(CharacterCard);
