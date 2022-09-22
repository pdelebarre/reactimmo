import React, { useState, useContext } from "react";

import Details from "./Details";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Navigation } from "swiper";

import "swiper/css";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
import "swiper/css/navigation";
// import "swiper/modules/navigation/navigation.min.css";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import classes from "./House.module.css";
import Professional from "./Professional";

import FavoritesContext from "../../store/favorites-context";

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

  const content = (
    <div className={classes.container}>
      <div className={classes.header__container}>
        <Professional professional={props.professional} />
        <section className={classes.actions__container}>
          <HighlightOffIcon
            className={classes.button}
            onClick={discardHandler}
          />
          <div className={classes.button} onClick={toggleFavoriteHandler}>
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </div>
        </section>
      </div>
      <div className={classes.description}>
        <Swiper
          className={classes.images__container}
          navigation={true}
          modules={[Navigation]}
          preloadImages={false}
          lazy={true}
        >
          {props.photos.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  className={classes.image}
                  alt="no pix"
                  loading="lazy"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Details className={classes.details__container} house={props} />
      </div>
    </div>
  );

  return !isDiscarded && content;
};

export default House;
