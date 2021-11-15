import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import generatePageNumber from '@utils/generatePageNumber';
import Pagination from '../Pagination';

describe('Render Pagination component and it is navigation functionalities', () => {
  const initialCurrentPage = 1;
  const total = 100;

  it('Should be re render component when click in previous button', () => {
    const { getByTestId, rerender } = render(
      <Pagination currentPage={initialCurrentPage} total={total} setPage={() => {}} />,
    );

    expect(screen.queryByText('5')).toBeInTheDocument();
    expect(screen.queryByText('6')).toBeInTheDocument();
    expect(screen.queryByText('1')).toBeInTheDocument();
    expect(screen.queryByText('2')).toBeInTheDocument();
    expect(screen.queryByText('3')).toBeInTheDocument();
    expect(screen.queryByText('4')).not.toBeInTheDocument();

    const buttonPrevious = getByTestId('button-previous');
    fireEvent.click(buttonPrevious);
    const newCurrentPage = generatePageNumber(initialCurrentPage, total, false);
    rerender(<Pagination currentPage={newCurrentPage} total={total} setPage={() => {}} />);

    expect(screen.queryByText('4')).toBeInTheDocument();
    expect(screen.queryByText('5')).toBeInTheDocument();
    expect(screen.queryByText('6')).toBeInTheDocument();
    expect(screen.queryByText('1')).toBeInTheDocument();
    expect(screen.queryByText('2')).toBeInTheDocument();
    expect(screen.queryByText('3')).not.toBeInTheDocument();
  });

  it('Should be re render component when click in next button', () => {
    const { getByTestId, rerender } = render(
      <Pagination currentPage={initialCurrentPage} total={total} setPage={() => {}} />,
    );

    expect(screen.queryByText('5')).toBeInTheDocument();
    expect(screen.queryByText('6')).toBeInTheDocument();
    expect(screen.queryByText('1')).toBeInTheDocument();
    expect(screen.queryByText('2')).toBeInTheDocument();
    expect(screen.queryByText('3')).toBeInTheDocument();
    expect(screen.queryByText('4')).not.toBeInTheDocument();

    const buttonNext = getByTestId('button-next');
    fireEvent.click(buttonNext);
    const newCurrentPage = generatePageNumber(initialCurrentPage, total, true);
    rerender(<Pagination currentPage={newCurrentPage} total={total} setPage={() => {}} />);

    expect(screen.queryByText('6')).toBeInTheDocument();
    expect(screen.queryByText('1')).toBeInTheDocument();
    expect(screen.queryByText('2')).toBeInTheDocument();
    expect(screen.queryByText('3')).toBeInTheDocument();
    expect(screen.queryByText('4')).toBeInTheDocument();
    expect(screen.queryByText('5')).not.toBeInTheDocument();
  });

  it('Should be re render component when click in custom button', () => {
    const { getByTestId, rerender } = render(
      <Pagination currentPage={initialCurrentPage} total={total} setPage={() => {}} />,
    );

    expect(screen.queryByText('5')).toBeInTheDocument();
    expect(screen.queryByText('6')).toBeInTheDocument();
    expect(screen.queryByText('1')).toBeInTheDocument();
    expect(screen.queryByText('2')).toBeInTheDocument();
    expect(screen.queryByText('3')).toBeInTheDocument();
    expect(screen.queryByText('4')).not.toBeInTheDocument();

    const buttonPage = getByTestId('button-page-4');
    fireEvent.click(buttonPage);
    const newCurrentPage = generatePageNumber(initialCurrentPage + 1, total, true);
    rerender(<Pagination currentPage={newCurrentPage} total={total} setPage={() => {}} />);

    expect(screen.queryByText('1')).toBeInTheDocument();
    expect(screen.queryByText('2')).toBeInTheDocument();
    expect(screen.queryByText('3')).toBeInTheDocument();
    expect(screen.queryByText('4')).toBeInTheDocument();
    expect(screen.queryByText('5')).toBeInTheDocument();
    expect(screen.queryByText('6')).not.toBeInTheDocument();
  });
});
