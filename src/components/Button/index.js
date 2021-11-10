import PropTypes from 'prop-types';
import * as S from './styles';

const Button = ({ onClick, minWidth, children }) => (
  <S.Button type="button" onClick={onClick} minWidth={minWidth}>
    {children}
  </S.Button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  minWidth: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  minWidth: '12rem',
};

export default Button;
