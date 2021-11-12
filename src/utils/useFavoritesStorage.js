const CHARACTERS_FAVORITES = 'characters_favorites';

const useFavoritesStorage = () => {
  const getFavorites = () => {
    const charactersFavoritesInString = localStorage.getItem(CHARACTERS_FAVORITES);
    const convertFavorites = JSON.parse(charactersFavoritesInString);
    return convertFavorites || [];
  };

  const setFavorites = (newFavorites) => localStorage.setItem(CHARACTERS_FAVORITES, JSON.stringify(newFavorites));

  const getIndex = (favorites, id) => favorites.findIndex((favoriteId) => favoriteId === id);

  const verifyFavorite = (characterId) => {
    const favorites = getFavorites();

    if (!favorites) return false;

    const foundIndex = getIndex(favorites, Number(characterId));

    if (foundIndex === -1) return false;

    return true;
  };

  const updateFavorites = (isRemove, id) => {
    let favorites = getFavorites();
    const convertId = Number(id);

    if (favorites.length > 0) {
      if (isRemove) {
        const foundIndex = getIndex(favorites, convertId);
        favorites.splice(foundIndex, 1);
      }

      if (!isRemove && favorites.length < 5) {
        favorites.push(convertId);
      }
    } else {
      favorites = [convertId];
    }

    setFavorites(favorites);
  };

  return { verifyFavorite, updateFavorites, getFavorites };
};

export default useFavoritesStorage;
