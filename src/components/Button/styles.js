import styled from 'styled-components';
import { color } from '@styles/theme';

export const Button = styled.button`
  appearance: none;
  border-radius: 0.25rem;
  cursor: pointer;
  min-width: ${({ minWidth }) => minWidth};
  height: 3rem;
  outline: 0;
  padding: 0 0.5rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  border: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  transition: all 0.3s ease;
  color: ${color.red.normal};
  background-color: transparent;
  margin: auto;

  &:hover,
  &:focus {
    box-shadow: 0 0 0 2px #000;
  }
`;
