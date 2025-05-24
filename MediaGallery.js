import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MediaGallery = ({ media }) => {
  return (
    <div className="media-gallery">
      <Carousel showThumbs={false} showStatus={false}>
        {media.map((item, index) => (
          <div key={index}>
            {item.type === 'image' ? (
              <img src={item.url} alt={item.caption} />
            ) : (
              <video controls src={item.url} />
            )}
            <p className="legend">{item.caption}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MediaGallery;