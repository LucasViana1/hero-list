import PropTypes from 'prop-types';
import iconBusca from '@assets/busca/Lupa/Shape.png';
import * as S from './styles';

const Input = ({ id, type, kind, placeholder, onChange }) => (
  <S.InputContainer kind={kind}>
    {type === 'search' && <img src={iconBusca} alt="Busca" />}
    <input id={id} type={type} placeholder={placeholder} onChange={onChange} />
  </S.InputContainer>
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'search']),
  kind: PropTypes.oneOf(['light', 'danger']),
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: 'text',
  kind: 'danger',
  placeholder: '',
};

export default Input;
