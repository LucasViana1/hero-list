import styled from 'styled-components';
import { color, breakpoint } from '@styles/theme';

export const CharacterCard = styled.div`
  height: 20rem;
  width: 18rem;
  margin-bottom: 4rem;
  border-end-end-radius: 1rem;
  border-end-start-radius: 1rem;

  &:hover {
    box-shadow: 0 0 0 2px ${color.gray.dark};
  }

  @media (min-width: ${breakpoint.sm}) {
    margin-right: 22px;
  }

  @media (min-width: ${breakpoint.md}) {
    width: 16rem;
  }

  @media (min-width: ${breakpoint.xl}) {
    width: 12rem;
  }

  img {
    border-bottom: 3px solid ${color.red.normal};
    width: 100%;
    height: 100%;
  }
`;

export const CharacterInfos = styled.div`
  margin: 3px 0.25rem;

  p {
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  img {
    border: none;
    width: auto;
    height: 2rem;
  }
`;
