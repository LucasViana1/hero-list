const CHARACTERS_FAVORITES = 'characters_favorites';

const useFavoritesStorage = () => {
  const getFavorites = () => {
    const charactersFavorites = localStorage.getItem(CHARACTERS_FAVORITES);
    const convertFavorites = JSON.parse(charactersFavorites);
    return convertFavorites || [];
  };

  const setFavorites = (newFavorites) => {
    localStorage.setItem(CHARACTERS_FAVORITES, JSON.stringify(newFavorites));
  };

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
      } else if (favorites.length < 5) {
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
