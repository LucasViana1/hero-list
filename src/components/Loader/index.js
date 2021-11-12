import PropTypes from 'prop-types';
import * as S from './styles';

const Loader = ({ size }) => <S.Loader size={size} />;

Loader.propTypes = {
  size: PropTypes.oneOf(['small', 'medium']),
};

Loader.defaultProps = {
  size: 'medium',
};

export default Loader;
