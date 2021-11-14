import styled from 'styled-components';
import { breakpoint } from '@styles/theme';

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;

  button {
    display: flex;
    justify-content: center;
    margin: 0;
    margin-right: 1rem;
    min-width: 2rem;
    height: 2rem;
  }

  .button-page-0,
  .button-page-4 {
    @media (max-width: ${breakpoint.md}) {
      display: none;
    }
  }
`;
