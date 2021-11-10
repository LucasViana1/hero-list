import styled from 'styled-components';
import { breakpoint, color } from '@styles/theme';

export const HomeHeader = styled.header`
  text-align: center;
  padding: 2rem 0 0.5rem;

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
  text-align: center;
  margin-bottom: 4rem;
`;

export const HomeFilter = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 2rem;

  @media (min-width: ${breakpoint.lg}) {
    flex-direction: row;
  }

  p {
    color: ${color.gray.light};
    font-weight: 700;
    margin-bottom: 2rem;

    @media (min-width: ${breakpoint.lg}) {
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
    margin: 0;
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

export const HomeArticle = styled.article``;
