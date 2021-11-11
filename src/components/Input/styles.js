import styled, { css } from 'styled-components';
import { color } from '@styles/theme';

const theme = {
  danger: { background: color.red.light, color: color.red.normal },
  light: { background: '#fff', color: color.gray.normal },
};

export const InputContainer = styled.label`
  padding: 1rem 1.5rem;
  display: flex;
  border-radius: 2rem;
  background: ${({ kind }) => theme[kind].background};
  ${({ kind }) =>
    kind === 'light' &&
    css`
      border: 1px solid ${color.gray.light};
    `};

  img {
    margin-right: 2rem;
  }

  input {
    background-color: transparent;
    border: 0;
    outline: 0;
    width: 100%;
    color: ${({ kind }) => theme[kind].color};
    font-size: 1rem;

    ::placeholder {
      color: ${({ kind }) => theme[kind].color};
      font-weight: 700;
      font-size: 1rem;
    }
  }
`;
