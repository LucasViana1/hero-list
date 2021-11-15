import nock from 'nock';
import { renderHook, act } from '@testing-library/react-hooks';
import useFetchCharacterComics from '../useFetchCharacterComics';

const comicsMock = {
  total: 3,
  results: [
    {
      id: 333,
      title: 'Hulk (2021) #1',
      thumbnail: {
        path: 'http://image.domain/hulk_1',
        extension: 'jpg',
      },
    },
    {
      id: 334,
      title: 'Hulk (2021) #2',
      thumbnail: {
        path: 'http://image.domain/hulk_2',
        extension: 'jpg',
      },
    },
    {
      id: 335,
      title: 'Marvel Action Origins (2021) #3',
      thumbnail: {
        path: 'http://image.domain/hulk_3',
        extension: 'jpg',
      },
    },
  ],
};

describe('Validate flow for get character comics from custom hook', () => {
  const baseUrl = 'http://localhost:80';
  const defaultQuery = 'ts=2&apikey=PUBLIC_KEY&hash=hash';
  let dateNowSpy;

  beforeAll(() => {
    dateNowSpy = jest.spyOn(Date, 'now').mockImplementation(() => 2000);
  });

  afterAll(() => {
    dateNowSpy.mockRestore();
  });

  const characterId = 123;
  const limit = 10;
  const limitQuery = `limit=${limit}`;
  const offsetQuery = 'offset=0';
  const orderByQuery = 'orderBy=-onsaleDate';
  const path = `/characters/${characterId}/comics?${defaultQuery}&${limitQuery}&${offsetQuery}&${orderByQuery}`;

  it('Should validate the initial states', async () => {
    const { result } = renderHook(() => useFetchCharacterComics());
    const { getComics, comics, comicsError, comicsIsLoading } = result.current;

    expect(comics).toBe(undefined);
    expect(comicsError).toBe('');
    expect(comicsIsLoading).toBe(false);
    expect(typeof getComics).toBe('function');
  });

  it('Should be fetch for list character comics and returned status success', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchCharacterComics());
    const { getComics } = result.current;

    const scope = nock(baseUrl).get(path).reply(200, {
      data: comicsMock,
    });

    act(() => {
      getComics(characterId);
    });

    expect(result.current.comicsIsLoading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.comicsIsLoading).toBe(false);
    expect(result.current.comicsError).toBe('');
    expect(result.current.comics.total).toBe(comicsMock.total);
    expect(result.current.comics.results).toEqual(comicsMock.results);

    scope.done();
  });

  it('Should be fetch for returned error message from status error', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchCharacterComics());
    const { getComics } = result.current;

    const scope = nock(baseUrl).get(path).reply(400);

    act(() => {
      getComics(characterId);
    });

    expect(result.current.comicsIsLoading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.comicsIsLoading).toBe(false);
    expect(result.current.comicsError).toBe('Request failed with status code 400');

    scope.done();
  });
});
