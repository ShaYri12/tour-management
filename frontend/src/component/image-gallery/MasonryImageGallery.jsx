import React from 'react'
import galleryImages from './galleryImages.js'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import { Lightbox } from "react-modal-image";
import ModalImage from "react-modal-image";

const MasonryImageGallery = () => {
  return (

    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 400: 2, 768: 3, 992: 4 }}>

  
       <Masonry gutter="1rem">
        {galleryImages.map((item, index) => (
          <>
          <ModalImage className='masonry-img' 
            small={item}
            large={item}
            key={index}
            alt=""
            hideDownload={ true }
            hideZoom= { true }
            
          />
          
          {// <img className='masonry-img '
          //   src={item}
          //   key={index}
          //   alt=""
          //   style={{ width: "100%", display: "block", borderRadius: "10px" }}
          // />
          }
          </>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default MasonryImageGallery