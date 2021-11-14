import styled from 'styled-components';
import { breakpoint, color } from '@styles/theme';

export const HomeHeader = styled.header`
  text-align: center;
  padding: 1rem 0 0.5rem;

  img {
    margin-bottom: 1rem;
  }

  h1 {
    text-transform: uppercase;
  }
`;

export const HomeSection = styled.section`
  padding: 0.5rem;

  @media (min-width: ${breakpoint.md}) {
    padding: 0 1rem;
  }

  @media (min-width: ${breakpoint.lg}) {
    padding: 0 6rem;
  }

  h2 {
    color: ${color.gray.normal};
    font-size: 1rem;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const HomeSearch = styled.div`
  width: 96%;
  margin: auto;
  margin-bottom: 4rem;

  @media (min-width: ${breakpoint.md}) {
    width: 70%;
  }
`;

export const HomeFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${color.gray.light};

  @media (min-width: ${breakpoint.xl}) {
    flex-direction: row;
  }

  p {
    display: flex;
    align-items: center;
    color: ${color.gray.light};
    font-weight: 700;
    margin-bottom: 1rem;

    @media (min-width: ${breakpoint.xl}) {
      margin-bottom: 0;
    }
  }
`;

export const FilterActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${breakpoint.md}) {
    padding: 0 1rem;
    flex-direction: row;
  }

  p {
    color: ${color.red.normal};
    margin-right: 1rem;
    margin-bottom: 0;

    img {
      margin-right: 0.25rem;
    }
  }

  p:last-child {
    margin-left: 0;
    margin-top: 0.5rem;

    @media (min-width: ${breakpoint.md}) {
      margin-left: 1rem;
      margin-top: 0;
    }
  }
`;

export const FilterFavoriteImg = styled.img`
  margin-right: 2.25rem;
`;

export const HomeArticle = styled.article`
  display: flex;
  justify-content: center;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 6rem 0;
  min-height: 50vh;
`;

export const CharactersContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 70vh;
`;

export const ErrorMessage = styled.span`
  font-size: 1.8rem;
  color: ${color.red.normal};
  height: 60vh;
`;
