import React, { useState } from 'react';
import './ClansSlider.scss';
import DotsDecoration from '../../static/images/slider/DotsDecoration.png';
import LeftArrow from '../../static/images/gorillas-slider/LeftArrow.png';
import RightArrow from '../../static/images/gorillas-slider/RightArrow.png';
import Gorilla1 from '../../static/images/gorillas-slider/gorillas/Gorilla1.png';
import Gorilla2 from '../../static/images/gorillas-slider/gorillas/Gorilla2.png';
import Gorilla3 from '../../static/images/gorillas-slider/gorillas/Gorilla3.png';
import TitleDecoration from '../../static/images/sections/ClansTitleDecoration.png';

const initialGorillas = [Gorilla3, Gorilla3, Gorilla3];
const initialIndex = 0;

export const ClansSlider = () => {
  const [gorillas] = useState(initialGorillas.map((imgSrc, index) => ({ image: imgSrc, order: index })));
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);

  const step = (nextStep) => {
    if (nextStep > gorillas.length - 1) {
      setSelectedIndex(0);
    } else if (nextStep < 0) {
      setSelectedIndex(gorillas.length - 1);
    } else {
      setSelectedIndex(nextStep);
    }
  };

  const increment = () => {
    step(selectedIndex + 1);
  };

  const decrement = () => {
    step(selectedIndex - 1);
  };

  const getLeftIndex = () => {
    return selectedIndex - 1 >= 0 ? selectedIndex - 1 : gorillas.length - 1;
  };

  const getRightIndex = () => {
    return selectedIndex + 1 <= gorillas.length - 1 ? selectedIndex + 1 : 0;
  };

  return (
    <div className="clans-slider">
      <div className="row">
        <div className="col-12">
          <div className="clans-slider-title-container">
            <div className="clans-slider-title-background">
              <img src={TitleDecoration} alt="main clans slider background" className="clans-slider-title-background-img" />
            </div>

            <div className="clans-slider-title">TROPS</div>

            <div className="clans-slider-subtitle">Scanning...</div>
          </div>
        </div>
      </div>

      <div className="row h-100">
        <div className="mb-5 col-12 ">
          <img src={DotsDecoration} alt="" className="img-detail dots" />
          <div className="row h-100">
            <div className="col-lg-3 col-12 d-none d-lg-flex align-items-center clans-slider-gorilla-left">
              <img src={gorillas[getLeftIndex()].image} alt="Gorilla" className="clans-slider-gorilla-img" onClick={() => decrement()} />
            </div>
            <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
              <span className="btn clans-slider-arrow-left position-absolute d-lg-flex d-none" onClick={() => decrement()}>
                <img src={LeftArrow} alt="left arrow" />
              </span>
              <img src={gorillas[selectedIndex].image} alt="Gorilla" className="clans-slider-gorilla-img " />
              <span className="btn clans-slider-arrow-right d-lg-flex d-none position-absolute" onClick={() => increment()}>
                <img src={RightArrow} alt="right arrow" />
              </span>
            </div>
            <div className="col-lg-3 col-12 d-none d-lg-flex align-items-center clans-slider-gorilla-right">
              <img src={gorillas[getRightIndex()].image} alt="Gorilla" className="clans-slider-gorilla-img" onClick={() => increment()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClansSlider;
