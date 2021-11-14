import styled, { css } from 'styled-components';

import { color, breakpoint } from '@styles/theme';

export const CharacterHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
  padding: 0.25rem;

  @media (min-width: ${breakpoint.md}) {
    margin-bottom: 4rem;
  }

  img {
    flex: 1;
  }

  div {
    flex: 4;

    label {
      width: auto;
      margin: auto;

      @media (min-width: ${breakpoint.md}) {
        width: 66%;
      }
    }
  }

  @media (min-width: ${breakpoint.md}) {
    padding: 0 0.5rem;
  }

  @media (min-width: ${breakpoint.lg}) {
    padding: 0 3rem;
    flex-direction: row;
  }
`;

export const CharacterSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  margin-bottom: 4rem;

  @media (min-width: ${breakpoint.md}) {
    padding: 0 1rem;
  }

  @media (min-width: ${breakpoint.lg}) {
    padding: 0 6rem;
    flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  }

  h2 {
    margin-bottom: 2rem;
  }
`;

export const CharacterCol = styled.div`
  width: 100%;
  margin-right: 0;

  @media (min-width: ${breakpoint.sm}) {
    ${({ isSeparate }) =>
      isSeparate &&
      css`
        margin-right: 10%;
      `}
  }

  @media (min-width: ${breakpoint.lg}) {
    width: ${({ width }) => width};
  }
`;

export const CharacterName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media (min-width: ${breakpoint.xl}) {
    margin-bottom: 4rem;
  }

  h1 {
    text-transform: uppercase;
  }
`;

export const CharacterDescription = styled.p`
  margin-bottom: 2rem;
  color: ${color.gray.dark};

  @media (min-width: ${breakpoint.xl}) {
    margin-bottom: 4rem;
  }
`;

export const CharacterQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 2rem;
  font-weight: bold;
  color: ${color.gray.dark};

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5rem;
  }
`;

export const CharacterQuantityValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BookImg = styled.img`
  margin-right: 0.75rem;
`;

export const VideoImg = styled.img`
  margin-right: 0;
`;

export const CharacterRatingAndLastComic = styled.div`
  color: ${color.gray.dark};
  margin-bottom: 2rem;

  p {
    margin-bottom: 2rem;

    b {
      margin-right: 0.5rem;
    }
  }

  p:first-child {
    display: flex;
    align-items: center;
  }
`;

export const ComicsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ComicCard = styled.div`
  height: 14rem;
  width: 9rem;
  border: 1px solid ${color.gray.light};
  margin: 0 22px 4rem 0;

  @media (min-width: ${breakpoint.xl}) {
    width: 8rem;
  }

  img {
    width: 100%;
    height: 65%;
  }

  p {
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 1.8rem;
  color: ${color.red.normal};
`;
