import PropTypes from 'prop-types';
import iconBusca from '@assets/busca/Lupa/Shape.png';
import * as S from './styles';

const Input = ({ id, type, placeholder, onChange }) => (
  <S.InputContainer>
    <img src={iconBusca} alt="Busca" />
    <input id={id} type={type} placeholder={placeholder} onChange={onChange} />
  </S.InputContainer>
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'search']),
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
};

export default Input;
