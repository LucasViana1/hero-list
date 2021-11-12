import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import iconHeartUnfilled from '@assets/icones/heart/Path Copy 2@2x.png';
import iconHeartFilled from '@assets/icones/heart/Path Copy 7@2x.png';
import { useHistory } from 'react-router-dom';
import * as S from './styles';
import Button from '../Button';

const CharacterCard = ({ character }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const router = useHistory();
  const {
    id,
    name,
    description,
    thumbnail: { extension, path },
  } = character;
  const imageUrl = `${path}.${extension}`;

  const handleAddToFavorite = () => {
    setIsFavorite((oldIsFavorite) => !oldIsFavorite);
  };

  const handleNavigationToCharacter = () => {
    router.push(`/personagem?id=${id}`, { name, description, imageUrl });
  };

  return (
    <S.CharacterCard>
      <div
        role="button"
        tabIndex="0"
        onKeyPress={handleNavigationToCharacter}
        onClick={handleNavigationToCharacter}
        style={{ height: '76%', cursor: 'pointer' }}
      >
        <img src={imageUrl} alt={name} />
      </div>

      <S.CharacterInfos>
        <p title={name}>{name}</p>
        <Button onClick={handleAddToFavorite} minWidth="1rem">
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
