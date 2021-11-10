import styled from 'styled-components';
import { color } from '@styles/theme';

export const InputContainer = styled.label`
  padding: 1rem 1.5rem;
  display: flex;
  border-radius: 2rem;
  background: ${color.red.light};

  img {
    margin-right: 2rem;
  }

  input {
    background-color: transparent;
    border: 0;
    outline: 0;
    width: 100%;
    color: ${color.red.normal};
    font-size: 1rem;

    ::placeholder {
      color: ${color.red.normal};
      font-weight: 700;
      font-size: 1rem;
    }
  }
`;
