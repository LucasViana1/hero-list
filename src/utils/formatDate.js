const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

const formatDate = (rawDate) => {
  if (!rawDate || typeof rawDate !== 'string') {
    return 'Data inválida';
  }

  const date = new Date(rawDate);
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month}. ${year}`;
};

export default formatDate;
