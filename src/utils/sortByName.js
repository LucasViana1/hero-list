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
  const results = list.sort((a, b) => {
    const firstName = a.name.toLocaleLowerCase();
    const secondName = b.name.toLocaleLowerCase();

    if (firstName > secondName) return sortValues[sortTerm].bigger;

    if (firstName < secondName) return sortValues[sortTerm].smaller;

    return 0;
  });

  return results;
};

export default sortByName;
