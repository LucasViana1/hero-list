import styled from 'styled-components';
import { color } from '@styles/theme';

export const SwitchLabel = styled.label`
  display: block;
  position: relative;
  border: none;
  border-radius: 0;
  background-color: transparent;
  padding: 0;
  width: 2rem;
  height: 19px;
  margin-left: 0.5rem;

  &:hover {
    box-shadow: 0 0 0 1px ${color.gray.normal};
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s;
  border-radius: 2rem;
  background-color: ${color.gray.light};

  &:before {
    position: absolute;
    content: '';
    height: 14px;
    width: 14px;
    left: 2px;
    bottom: 3px;
    background-color: ${color.red.normal};
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const InputCheckbox = styled.input`
  display: none;

  &:checked + ${Slider}:before {
    transform: translateX(14px);
  }
`;
