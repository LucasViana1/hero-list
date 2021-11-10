import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Switch = ({ id, name, checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleIsChecked = useCallback(
    ({ target }) => {
      if (target.id !== id) {
        onChange();
        setIsChecked((newCheck) => !newCheck);
      }
    },
    [id, onChange],
  );

  return (
    <S.SwitchLabel htmlFor={id} role="button" tabIndex={0} onKeyPress={handleIsChecked} onClick={handleIsChecked}>
      <S.InputCheckbox id={id} name={name} type="checkbox" checked={isChecked} readOnly />
      <S.Slider />
    </S.SwitchLabel>
  );
};

Switch.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Switch;
