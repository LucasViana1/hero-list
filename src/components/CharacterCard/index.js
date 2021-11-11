import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import iconHeartUnfilled from '@assets/icones/heart/Path Copy 2@2x.png';
import iconHeartFilled from '@assets/icones/heart/Path Copy 7@2x.png';
import * as S from './styles';
import Button from '../Button';

const CharacterCard = ({ character }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const {
    id,
    name,
    thumbnail: { extension, path },
  } = character;

  const handleAddToFavorite = () => {
    setIsFavorite((oldIsFavorite) => !oldIsFavorite);
  };

  return (
    <S.CharacterCard to={`/personagem?id=${id}`}>
      <img src={`${path}.${extension}`} alt={name} />

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
    thumbnail: PropTypes.shape({
      extension: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default memo(CharacterCard);
