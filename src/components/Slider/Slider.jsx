import React, { useState } from 'react';
import './Slider.scss';
import TitleBackground from '../../static/images/slider/TitleDecoration.png';
import DotsDecoration from '../../static/images/slider/DotsDecoration.png';
import LinesDecoration from '../../static/images/slider/LinesDecoration.png';
import BackgroundDecoration from '../../static/images/slider/BackgroundDecoration.png';
import { HomeTitles, initialNavPills } from './SliderConstants';
import { SliderItem } from './SliderItem';

export const Slider = () => {
  const [navPills] = useState(initialNavPills);
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <div className="container">
      <div className="main-home-slider slider" id="main-home-slider">
        <div className="slider-title-container mb-5">
          <div className="slider-title-background">
            <img src={TitleBackground} alt="" />
          </div>
          <div className="slider-title-background-detail">
            <img src={BackgroundDecoration} alt="" />
          </div>
          <div className="slider-pre-title">{HomeTitles.pretitle}</div>
          <div className="slider-title">{HomeTitles.title}</div>
          <div className="slider-subtitle">{HomeTitles.subtitle}</div>
        </div>

        <div className="slider-content mt-5">
          <img src={DotsDecoration} alt="" className="img-detail dots" />

          {navPills.find((navPill, index) => (index + 1) === selectedIndex).content}


        </div>

        <div className="slider-nav-pills-container row">
          {navPills.map((navPill, index) => (
            <SliderItem
              key={`slider-principal-title-${index}`}
              navPill={{ ...navPill, index: (index + 1), active: (index + 1) === selectedIndex }}
              callBackSetIndex={setSelectedIndex}
            />
          ))}
        </div>
      </div>
      <div className='d-flex justify-content-end'>
        <img src={LinesDecoration} alt="" className="img-detail lines mr-5" />
      </div>
    </div>
  );
};

export default Slider;
