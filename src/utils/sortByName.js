const sortValues = {
  asc: {
    bigger: 1,
    smaller: -1,
  },
  desc: {
    bigger: -1,
    smaller: 1,
  },
};

const sortByName = (list, sortTerm) => {
  if (sortTerm !== 'asc' && sortTerm !== 'desc') return list;

  if (!Array.isArray(list) || list.length === 0) return [];

  const results = list.sort((a, b) => {
    const firstName = a?.name?.toLocaleLowerCase();
    const secondName = b?.name?.toLocaleLowerCase();

    if (!firstName || !secondName) return 0;

    if (firstName > secondName) return sortValues[sortTerm].bigger;

    if (firstName < secondName) return sortValues[sortTerm].smaller;

    return 0;
  });

  return results;
};

export default sortByName;
