import nock from 'nock';
import { renderHook, act } from '@testing-library/react-hooks';
import useFetchCharacters from '../useFetchCharacters';

const charactersMock = {
  count: 2,
  results: [
    {
      id: 1,
      name: 'Spider-Man',
      description: 'Descrição do Spider-Man',
      thumbnail: { extension: 'jpg', path: 'http://image.domain/spider_man' },
    },
    {
      id: 2,
      name: 'Spider-Girl',
      description: 'Descrição do Spider-Girl',
      thumbnail: { extension: 'jpg', path: 'http://image.domain/spider_girl' },
    },
  ],
};

describe('Validate flow for get character from custom hook', () => {
  const baseUrl = 'http://localhost:80';
  const defaultQuery = 'ts=2&apikey=PUBLIC_KEY&hash=hash';
  let dateNowSpy;

  beforeAll(() => {
    dateNowSpy = jest.spyOn(Date, 'now').mockImplementation(() => 2000);
  });

  afterAll(() => {
    dateNowSpy.mockRestore();
  });

  it('Should validate the initial states', () => {
    const { result } = renderHook(() => useFetchCharacters());
    const {
      charactersData,
      charactersError,
      charactersIsLoading,
      charactersList,
      getCharacters,
      getFavoritesCharacters,
      setCharactersList,
    } = result.current;

    expect(charactersData).toBe(undefined);
    expect(charactersError).toBe('');
    expect(charactersIsLoading).toBe(false);
    expect(charactersList).toEqual([]);
    expect(typeof getCharacters).toBe('function');
    expect(typeof getFavoritesCharacters).toBe('function');
    expect(typeof setCharactersList).toBe('function');
  });

  it('Should be fetch for list characters and returned status success', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchCharacters());
    const { getCharacters } = result.current;
    const limit = 20;
    const searchName = 'spider';
    const limitQuery = `limit=${limit}`;
    const offsetQuery = 'offset=0';
    const searchNameQuery = `nameStartsWith=${searchName}`;
    const path = `/characters?${defaultQuery}&${limitQuery}&${offsetQuery}&${searchNameQuery}`;

    const scope = nock(baseUrl).get(path).reply(200, {
      data: charactersMock,
    });

    act(() => {
      getCharacters(searchName);
    });

    expect(result.current.charactersIsLoading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.charactersIsLoading).toBe(false);
    expect(result.current.charactersError).toBe('');
    expect(result.current.charactersData.count).toBe(charactersMock.count);
    expect(result.current.charactersList).toEqual(charactersMock.results);

    scope.done();
  });

  it('Should be fetch for returned error message from status error', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchCharacters());
    const { getCharacters } = result.current;
    const limit = 20;
    const searchName = 'spider';
    const limitQuery = `limit=${limit}`;
    const offsetQuery = 'offset=0';
    const searchNameQuery = `nameStartsWith=${searchName}`;
    const path = `/characters?${defaultQuery}&${limitQuery}&${offsetQuery}&${searchNameQuery}`;

    const scope = nock(baseUrl).get(path).reply(400);

    act(() => {
      getCharacters(searchName);
    });

    expect(result.current.charactersIsLoading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.charactersIsLoading).toBe(false);
    expect(result.current.charactersError).toBe('Request failed with status code 400');

    scope.done();
  });
});
