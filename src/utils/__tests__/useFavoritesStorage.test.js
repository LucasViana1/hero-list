import { renderHook } from '@testing-library/react-hooks';
import useFavoritesStorage from '../useFavoritesStorage';

describe('Managing localStorage with favorites characters', () => {
  afterEach(() => {
    const { result } = renderHook(() => useFavoritesStorage());
    result.current.clearFavorites();
  });

  describe('Validate add, remove and list', () => {
    it('Should be added 4 favorites with id (in number or string) and displayed', () => {
      const { result } = renderHook(() => useFavoritesStorage());
      const { getFavorites, updateFavorites } = result.current;
      const isRemove = false;

      expect(getFavorites()).toEqual([]);

      updateFavorites(isRemove, 44);
      expect(getFavorites()).toEqual([44]);

      updateFavorites(isRemove, '11');
      expect(getFavorites()).toEqual([44, 11]);

      updateFavorites(isRemove, 88);
      expect(getFavorites()).toEqual([44, 11, 88]);

      updateFavorites(isRemove, '22');
      expect(getFavorites()).toEqual([44, 11, 88, 22]);
    });

    it('Should be possible remove a favorite of filled list (remove first element, middle and last element)', () => {
      const { result } = renderHook(() => useFavoritesStorage());
      const { getFavorites, updateFavorites } = result.current;
      const isRemove = true;
      const favoritesId = [33, 11, 99, 77];

      favoritesId.forEach((id) => updateFavorites(false, id));
      expect(getFavorites()).toEqual(favoritesId);

      updateFavorites(isRemove, 99);
      expect(getFavorites()).toEqual([33, 11, 77]);

      updateFavorites(isRemove, 33);
      expect(getFavorites()).toEqual([11, 77]);

      updateFavorites(isRemove, 77);
      expect(getFavorites()).toEqual([11]);
    });

    it('Should be block new id in list when reach limit 5 items', () => {
      const { result } = renderHook(() => useFavoritesStorage());
      const { getFavorites, updateFavorites } = result.current;
      const isRemove = false;
      const favoritesId = [33, 11, 99, 77, 22];

      favoritesId.forEach((id) => updateFavorites(false, id));

      updateFavorites(isRemove, 55);
      updateFavorites(isRemove, 44);
      updateFavorites(isRemove, 88);

      expect(getFavorites()).toEqual(favoritesId);
    });

    it('Should be verify if first param (isRemove) is incorrect type', () => {
      const { result } = renderHook(() => useFavoritesStorage());
      const { getFavorites, updateFavorites } = result.current;

      updateFavorites(undefined, 22);
      updateFavorites(null, 22);
      updateFavorites(1, 22);
      updateFavorites(0, 22);
      updateFavorites('', 22);
      updateFavorites('true', 22);
      updateFavorites('false', 22);

      expect(getFavorites()).toEqual([]);
    });

    it('Should be verify if second param (id) is incorrect type', () => {
      const { result } = renderHook(() => useFavoritesStorage());
      const { getFavorites, updateFavorites } = result.current;

      updateFavorites(false, undefined);
      updateFavorites(false, null);
      updateFavorites(false, '');
      updateFavorites(false, 'one');

      expect(getFavorites()).toEqual([]);
    });
  });

  describe('Validate search in current favorites list', () => {
    it('Should be return false if param is incorrect type', () => {
      const { result } = renderHook(() => useFavoritesStorage());
      const { verifyFavorite, updateFavorites } = result.current;
      const isRemove = false;

      updateFavorites(isRemove, 20);

      expect(verifyFavorite('')).toBe(false);
      expect(verifyFavorite('vinte')).toBe(false);
      expect(verifyFavorite(null)).toBe(false);
      expect(verifyFavorite(undefined)).toBe(false);
    });

    it('Should be return false when favorites list is empty', () => {
      const { result } = renderHook(() => useFavoritesStorage());
      const { verifyFavorite } = result.current;

      expect(verifyFavorite(22)).toBe(false);
    });

    it('Should be return true if exist id in favorites list', () => {
      const { result } = renderHook(() => useFavoritesStorage());
      const { updateFavorites, verifyFavorite } = result.current;
      const isRemove = false;

      updateFavorites(isRemove, 11);
      updateFavorites(isRemove, 22);
      updateFavorites(isRemove, 33);

      expect(verifyFavorite(22)).toBe(true);
      expect(verifyFavorite('22')).toBe(true);
    });

    it('Should be return false if not exist id in favorites list', () => {
      const { result } = renderHook(() => useFavoritesStorage());
      const { updateFavorites, verifyFavorite } = result.current;
      const isRemove = false;

      updateFavorites(isRemove, 11);
      updateFavorites(isRemove, 22);
      updateFavorites(isRemove, 33);

      expect(verifyFavorite(44)).toBe(false);
      expect(verifyFavorite('44')).toBe(false);
    });
  });
});
