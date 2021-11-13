import { useMemo } from 'react';
import PropTypes from 'prop-types';
import Button from '@components/Button';
import generatePageNumber from '@utils/generatePageNumber';
import * as S from './styles';

const Pagination = ({ currentPage, charactersData, setPage }) => {
  const list = useMemo(() => {
    const previousPage = generatePageNumber(currentPage, charactersData, false);
    const nextPage = generatePageNumber(currentPage, charactersData, true);

    const pages = [
      generatePageNumber(previousPage, charactersData, false),
      previousPage,
      currentPage,
      nextPage,
      generatePageNumber(nextPage, charactersData, true),
    ];

    return pages;
  }, [charactersData, currentPage]);

  return (
    <S.Pagination>
      <Button onClick={() => setPage(false)}>anterior</Button>

      {list.map((page) => (
        <Button key={page} onClick={() => setPage(false, page + 1)} isFill={page === currentPage}>
          {page}
        </Button>
      ))}

      <Button onClick={() => setPage(true)}>próximo</Button>
    </S.Pagination>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  charactersData: PropTypes.shape({
    total: PropTypes.number.isRequired,
  }).isRequired,
  setPage: PropTypes.func.isRequired,
};

export default Pagination;
