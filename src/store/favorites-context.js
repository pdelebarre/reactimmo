import React, { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteHouse) => {},
  removeFavorite: (houseId) => {},
  itemIsFavorite: (houseId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteHouse) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteHouse);
    });
  }

  function removeFavoriteHandler(houseId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((house) => house.id !== houseId);
    });
  }

  function itemIsFavoriteHandler(houseId) {
    return userFavorites.some((house) => house.id === houseId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
