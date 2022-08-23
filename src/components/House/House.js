import React, { useState, useContext } from "react";

import Details from "./Details";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Navigation } from "swiper";

// import "swiper/css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// import "swiper/css/navigation";
import "swiper/modules/navigation/navigation.min.css";

import { MdFavoriteBorder, MdFavorite, MdOutlineCancel } from "react-icons/md";

import classes from "./House.module.css";
import Professional from "./Professional";

import FavoritesContext from "../../store/favorites-context";

const House = (props) => {
  const favoritesCtx = useContext(FavoritesContext);
  const isFavorite = favoritesCtx.itemIsFavorite(props.id);

  const [isDiscarded, setIsDiscarded] = useState(false);
  // const [isFavorite, setIsFavorite] = useState(false);

  const discardHandler = () => {
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
          <MdOutlineCancel
            className={classes.button}
            onClick={discardHandler}
          />
          <div className={classes.button} onClick={toggleFavoriteHandler}>
            {isFavorite ? <MdFavorite color={"red"} /> : <MdFavoriteBorder />}
          </div>
        </section>
      </div>
      <div className={classes.description}>
        <Swiper
          className={classes.images__container}
          navigation={true}
          modules={[Navigation]}
        >
          {props.photos.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={image} className={classes.image} alt="no pix" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Details className={classes.details__container} house={props} />
      </div>
    </div>
  );

  return <div className={classes.house}>{isDiscarded ? null : content}</div>;

  // return <div className={classes.house}>House</div>;
};

export default House;
