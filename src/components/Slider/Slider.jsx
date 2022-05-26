import React, { useState } from 'react';
import './Slider.scss';
import TitleBackground from '../../static/images/slider/TitleDecoration.png';
import DotsDecoration from '../../static/images/slider/DotsDecoration.png';
import LinesDecoration from '../../static/images/slider/LinesDecoration.png';
import BackgroundDecoration from '../../static/images/slider/BackgroundDecoration.png';
import { initialNavPills } from './SliderConstants';
import { SliderItem } from './SliderItem';
import { useTranslation } from 'react-i18next';

export const Slider = () => {
  const [navPills] = useState(initialNavPills);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const { t } = useTranslation('translation', { keyPrefix: 'slider' });

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
          <div className="slider-pre-title">{t('SECTION.pretitle')}</div>
          <div className="slider-title">{t('SECTION.title')}</div>
          <div className="slider-subtitle">{t('SECTION.subtitle')}</div>
        </div>

        <div
          onTouchStart={(touchStartEvent) => handleTouchStart(touchStartEvent)}
          onTouchMove={(touchMoveEvent) => handleTouchMove(touchMoveEvent)}
          onTouchEnd={() => handleMouseUp()}
          onMouseDown={(mouseDownEvent) => handleMouseDown(mouseDownEvent)}
          onMouseMove={(mouseMoveEvent) => handleMouseMove(mouseMoveEvent)}
          onMouseUp={() => handleMouseUp()}
          onMouseLeave={() => handleMouseLeave()}
        >
          <div className="slider-content mt-5">
            <img src={DotsDecoration} alt="" className="img-detail dots" />

            {navPills.find((navPill, index) => index + 1 === selectedIndex).content}
          </div>

          {/* NOTE: Inside the map below, I've added index < 3 as a temporary solution to go up to 3 slider items. There should be a cleaner solution
          where the map only reads what is exactly in the translation.json file --JD*/}

          <div className="slider-nav-pills-container row">
            {navPills.map((navPill, index) => (
              (index < 3 && <SliderItem
                key={`slider-principal-title-${index}`}
                navPill={{ ...navPill, index: index + 1, active: index + 1 === selectedIndex }}
                callBackSetIndex={setSelectedIndex}
              />)
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
