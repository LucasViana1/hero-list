import PropTypes from 'prop-types';
import * as S from './styles';

const Button = ({ onClick, minWidth, margin, children }) => (
  <S.Button type="button" onClick={onClick} minWidth={minWidth} margin={margin}>
    {children}
  </S.Button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  minWidth: PropTypes.string,
  margin: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  minWidth: '12rem',
  margin: 'auto',
};

export default Button;
