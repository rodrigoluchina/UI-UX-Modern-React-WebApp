import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef"/>
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's World"/>
      <h1 className="headtext__cormorant">What we believe In</h1>

      <div className="app__chef-content" >
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote"/>
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deleniti alias atque repellendus corrupti. Dicta nemo blanditiis architecto laborum sed quam, error nulla eos, repellat, sapiente consequatur amet! Hic, quo?</p>
        </div>
        <p className="p__opensans">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, tempore laborum omnis veritatis quos corporis, maxime saepe nihil temporibus doloribus fuga cupiditate, reiciendis vitae totam. Odio labore suscipit maiores cumque.</p>
      </div>
      <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef and Founder</p>
          <img src={images.sign} alt="sign"/>
      </div>
    </div>
    
  </div>
);

export default Chef;
