import { useState } from 'react';
import './ClansSlider.scss';
import DotsDecoration from '../../static/images/slider/DotsDecoration.png';
import LeftArrow from '../../static/images/gorillas-slider/LeftArrow.png';
import RightArrow from '../../static/images/gorillas-slider/RightArrow.png';
import TitleDecoration from '../../static/images/sections/ClansTitleDecoration.png';
import { gorillasList } from './ClanSlider.constants';
import ClansSliderImage from './ClanSliderImage';
import { useTranslation } from 'react-i18next';

export const ClansSlider = () => {
  const [gorillas] = useState(gorillasList.map((imgSrc, index) => ({ image: imgSrc, order: index })));
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { image } = gorillas[selectedIndex];
  const leftGorilla = gorillas[selectedIndex - 1 >= 0 ? selectedIndex - 1 : gorillas.length - 1];
  const rightGorilla = gorillas[selectedIndex + 1 <= gorillas.length - 1 ? selectedIndex + 1 : 0];
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'clans_slider' });

  const step = (nextStep) => {
    if (nextStep > gorillas.length - 1) {
      nextStep = 0;
    } else if (nextStep < 0) {
      nextStep = gorillas.length - 1;
    }
    setSelectedIndex(nextStep);
  };

  const increment = () => {
    step(selectedIndex + 1);
  };

  const decrement = () => {
    step(selectedIndex - 1);
  };

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
      setTouchEnd(mouseMoveEvent.screenX)
    }
  };
  const handleMouseUp = () => {
    if (touchStart - touchEnd > 150) {
      decrement();
    } else if (touchEnd - touchStart > 150) {
      increment();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleMouseLeave = () => {
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className="clans-slider">
      <div className="row">
        <div className="col-12">
          <div className="clans-slider-title-container">
            <div className="clans-slider-title-background">
              <img src={TitleDecoration} alt="main clans slider background" className="clans-slider-title-background-img" />
            </div>

            <div className="clans-slider-title">TROOPS</div>

            <div className="clans-slider-subtitle">Scanning...</div>
          </div>
        </div>
      </div>

      <div
        className="row h-100"
        onTouchStart={(touchStartEvent) => handleTouchStart(touchStartEvent)}
        onTouchMove={(touchMoveEvent) => handleTouchMove(touchMoveEvent)}
        onTouchEnd={() => handleMouseUp()}
        onMouseDown={(mouseDownEvent) => handleMouseDown(mouseDownEvent)}
        onMouseMove={(mouseMoveEvent) => handleMouseMove(mouseMoveEvent)}
        onMouseUp={() => handleMouseUp()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <div className="mb-5 col-12 ">
          <img src={DotsDecoration} alt="" className="img-detail dots" />
          <div className="row h-100">
            <div className="col-lg-3 col-12 d-none d-lg-flex align-items-center clans-slider-gorilla-left justify-content-center">
              <ClansSliderImage image={leftGorilla.image} callBack={() => decrement()}></ClansSliderImage>
            </div>
            <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
              <span className="btn clans-slider-arrow-left position-absolute d-lg-flex d-none" onClick={() => decrement()}>
                <img src={LeftArrow} alt="left arrow" />
              </span>
              <ClansSliderImage image={image}></ClansSliderImage>
              <span className="btn clans-slider-arrow-right d-lg-flex d-none position-absolute" onClick={() => increment()}>
                <img src={RightArrow} alt="right arrow" />
              </span>
            </div>
            <div className="col-lg-3 col-12 d-none d-lg-flex align-items-center clans-slider-gorilla-right justify-content-center">
              <ClansSliderImage image={rightGorilla.image} callBack={() => increment()}></ClansSliderImage>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClansSlider;
