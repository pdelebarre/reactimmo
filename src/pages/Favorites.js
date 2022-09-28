import React, { useContext } from "react";
import HousesList from "../components/Houses/HousesList";

import FavoritesContext from "../store/favorites-context";

const FavoritesPage = () => {
  const favoritesCtx = useContext(FavoritesContext);

  console.log("favoritesCtx :>> ", favoritesCtx);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = (
      <p>Pas de favoris... veuillez faire une recherche pour commencer</p>
    );
  } else {
    console.log("favoritesCtx.favorites :>> ", favoritesCtx.favorites);
    content = <HousesList houses={favoritesCtx.favorites} />;
  }

  console.log("content", content);

  return <section>{content}</section>;
};

export default FavoritesPage;
