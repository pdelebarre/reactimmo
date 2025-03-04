import React from 'react';

const GalleryCarousel = ({ images, style }) => (
  <div>
    {images.map((image, index) => (
      <img key={index} src={image.src} alt="" style={style} />
    ))}
  </div>
);

export default GalleryCarousel;