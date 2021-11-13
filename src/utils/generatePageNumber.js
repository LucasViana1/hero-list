const generatePageNumber = (oldPage, charactersData, isNext) => {
  const { total } = charactersData;
  const totalPages = Number.parseInt(total / 20, 10);
  let newPage = oldPage === 1 ? totalPages + 1 : oldPage - 1;

  if (isNext) newPage = oldPage - 1 === totalPages ? 1 : oldPage + 1;

  return newPage;
};

export default generatePageNumber;
