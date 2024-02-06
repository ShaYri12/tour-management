import React from 'react';
import galleryImages from './galleryImages.js';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import ModalImage from 'react-modal-image';

const MasonryImageGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 400: 2, 768: 3, 992: 4 }}>
      <Masonry gutter="1rem">
        {galleryImages.map((item, index) => (
          <ModalImage
            className='masonry-img'
            small={item}
            large={item}
            key={index}
            alt=""
            hideDownload={true}
            hideZoom={true}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryImageGallery;
