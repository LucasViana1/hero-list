import generateMandatoryQueryString from '../generateMandatoryQueryString';

describe('Generate the default query string for fetch endpoints', () => {
  let dateNowSpy;
  const initialTimestamp = 1636744000;
  const tsFinal = 1636744;

  beforeAll(() => {
    dateNowSpy = jest.spyOn(Date, 'now').mockImplementation(() => initialTimestamp);
  });

  afterAll(() => {
    dateNowSpy.mockRestore();
  });

  it('Should be return complete mandatory query string with timestamp, API key and hash', () => {
    const timestampQuery = `ts=${tsFinal}`;
    const apiKeyQuery = 'apikey=PUBLIC_KEY';
    const hashQuery = 'hash=hash';
    const completeQuery = `?${timestampQuery}&${apiKeyQuery}&${hashQuery}`;

    expect(generateMandatoryQueryString()).toBe(completeQuery);
  });
});
