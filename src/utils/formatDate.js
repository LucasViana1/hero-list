const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

const formatDate = (rawDate) => {
  if (!rawDate || typeof rawDate !== 'string') return 'Data inválida';

  const date = new Date(rawDate);
  const rawDay = date.getDate();
  const rawMonth = date.getMonth();
  const rawYear = date.getFullYear();

  if (Number.isNaN(rawDay) || Number.isNaN(rawMonth) || Number.isNaN(rawYear)) return 'Data inválida';

  const day = rawDay < 10 ? `0${rawDay}` : rawDay;
  const month = months[rawMonth];
  const year = rawYear;

  return `${day} ${month}. ${year}`;
};

export default formatDate;
