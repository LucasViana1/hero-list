import styled from 'styled-components';
import { breakpoint } from '@styles/theme';

export const CharacterCard = styled.div`
  height: 20rem;
  width: 18rem;
  border: 1px solid black;
  margin: 0 22px 4rem 0;

  @media (min-width: ${breakpoint.xl}) {
    width: 12rem;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CharacterInfos = styled.div`
  margin: 0 0.25rem;

  p {
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  img {
    width: auto;
    height: 2rem;
  }
`;
