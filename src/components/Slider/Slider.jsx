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
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (touchStartEvent) => {
    setTouchStart(touchStartEvent.targetTouches[0].screenX);
  };
  const handleTouchMove = (touchMoveEvent) => {
    if (touchStart > 0) {
      setTouchEnd(touchMoveEvent.targetTouches[0].screenX);
    }
  };

  const handleMouseDown = (mouseDownEvent) => {
    setTouchStart(mouseDownEvent.screenX);
  };
  const handleMouseMove = (mouseMoveEvent) => {
    if (touchStart > 0) {
      setTouchEnd(mouseMoveEvent.screenX);
    }
  };

  const step = (nextStep) => {
    if (nextStep > navPills.length) {
      nextStep = 1;
    } else if (nextStep < 1) {
      nextStep = navPills.length;
    }
    setSelectedIndex(nextStep);
  };

  const handleMouseUp = () => {
    if (touchStart - touchEnd > 150) {
      step(selectedIndex + 1);
    } else if (touchEnd - touchStart > 150) {
      step(selectedIndex - 1);
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleMouseLeave = () => {
    setTouchStart(0);
    setTouchEnd(0);
  };

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

          {navPills.find((navPill, index) => index + 1 === selectedIndex).content}
        </div>

        <div
          className="slider-nav-pills-container row"
          onTouchStart={(touchStartEvent) => handleTouchStart(touchStartEvent)}
          onTouchMove={(touchMoveEvent) => handleTouchMove(touchMoveEvent)}
          onTouchEnd={() => handleMouseUp()}
          onMouseDown={(mouseDownEvent) => handleMouseDown(mouseDownEvent)}
          onMouseMove={(mouseMoveEvent) => handleMouseMove(mouseMoveEvent)}
          onMouseUp={() => handleMouseUp()}
          onMouseLeave={() => handleMouseLeave()}
        >
          {navPills.map((navPill, index) => (
            <SliderItem
              key={`slider-principal-title-${index}`}
              navPill={{ ...navPill, index: index + 1, active: index + 1 === selectedIndex }}
              callBackSetIndex={setSelectedIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
