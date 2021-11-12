import formatDate from '../formatDate';

describe('Get formatted date', () => {
  const ERROR_MESSAGE = 'Data inválida';

  it('Should be return error message when date param is of incorrect type', () => {
    expect(formatDate(null)).toBe(ERROR_MESSAGE);
    expect(formatDate(undefined)).toBe(ERROR_MESSAGE);
    expect(formatDate('')).toBe(ERROR_MESSAGE);
    expect(formatDate(1)).toBe(ERROR_MESSAGE);
    expect(formatDate(0)).toBe(ERROR_MESSAGE);
    expect(formatDate({})).toBe(ERROR_MESSAGE);
    expect(formatDate([])).toBe(ERROR_MESSAGE);
  });

  it('Should be return error message when entreries date that does not exist', () => {
    expect(formatDate('13-24-2020')).toBe(ERROR_MESSAGE);
    expect(formatDate('05-32-2020')).toBe(ERROR_MESSAGE);
  });

  it('Should be return date formatted correctly', () => {
    expect(formatDate('2020-09-24T00:00:00-0500')).toBe('24 set. 2020');
    expect(formatDate('2020-01-24T00:00:00-0500')).toBe('24 jan. 2020');
    expect(formatDate('2020-12-01T00:00:00-0500')).toBe('01 dez. 2020');
    expect(formatDate('09-24-2020')).toBe('24 set. 2020');
    expect(formatDate('09/24/2020')).toBe('24 set. 2020');
    expect(formatDate('01-24-2020')).toBe('24 jan. 2020');
    expect(formatDate('01/24/2020')).toBe('24 jan. 2020');
    expect(formatDate('12-01-2020')).toBe('01 dez. 2020');
    expect(formatDate('12/01/2020')).toBe('01 dez. 2020');
  });
});
