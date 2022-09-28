import React, { useState, useContext } from "react";

import Details from "./Details";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";


import Professional from "./Professional";

import FavoritesContext from "../../store/favorites-context";
import { Box, Card } from "@mui/material";

import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

const House = (props) => {
  const favoritesCtx = useContext(FavoritesContext);
  const isFavorite = favoritesCtx.itemIsFavorite(props.id);

  const [isDiscarded, setIsDiscarded] = useState(false);

  const discardHandler = () => {
    favoritesCtx.itemIsFavorite(props.id) &&
      favoritesCtx.removeFavorite(props.id);
    return setIsDiscarded(true);
  };

  const toggleFavoriteHandler = () => {
    if (isFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite(props);
    }
  };

  const images = props.photos.map((image, key) => ({
    src: image,
  }));

  const content = (
    <Card sx={{ display: "flex", flexDirection: "column", mt: 5 }}>
      <Card sx={{ display: "flex" }}>
        <Professional professional={props.professional} />

        <Box sx={{ display: "flex" }}>
          <HighlightOffIcon onClick={discardHandler} />
          <Box onClick={toggleFavoriteHandler}>
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </Box>
        </Box>
      </Card>
      <Box sx={{ display: "flex" }}>
        <Carousel
          images={images}
          shouldLazyLoad={true}
          style={{ height: 300, width: 300 }}
        />
        <Details house={props} />
      </Box>
    </Card>

  );

  return !isDiscarded && content;
};

export default House;
