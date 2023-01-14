import React from 'react';
import {images} from '../../constants';
import { SubHeading } from '../../components';
import { BsInstagram,BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs';

import './Gallery.css';

const galleryImages = [images.gallery01,images.gallery02,images.gallery03,images.gallery04];

const Gallery = () => {
  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const{current} = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300 ;
    } else {
      current.scrollLeft += 300 ;
    }
  }
  return (
  <div className="app__gallery flex__center">
    <div className="app__gallery-content">
      <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{color:'#AAA',marginTop:'2rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button type="button" className="custom__buttom">View More</button>
    </div>
    <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={scrollRef}>
      {galleryImages.map((image,index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1 }`}>
              <img src={image} alt="gallery"/>
              <BsInstagram class="gallery__image-icon"/>
            </div>
          ))}
      </div>
      <div className="app__gallery-images_arrows">
         <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
         <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
      </div>
    </div>
  </div>
  );
};

export default Gallery;
