import React, { useEffect, useState } from 'react';
import './ClansSlider.scss';
import DotsDecoration from '../../static/images/slider/DotsDecoration.png';
import LeftArrow from '../../static/images/gorillas-slider/LeftArrow.png';
import RightArrow from '../../static/images/gorillas-slider/RightArrow.png';
import TitleDecoration from '../../static/images/sections/ClansTitleDecoration.png';
import { gorillasList } from './ClanSlider.constants';

export const ClansSlider = () => {
  const [gorillas] = useState(gorillasList.map((imgSrc, index) => ({ image: imgSrc, order: index })));
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imageLeft, setImageLeft] = useState(gorillas[selectedIndex - 1 >= 0 ? selectedIndex - 1 : gorillas.length - 1].image);
  const [imageRight, setImageRight] = useState(gorillas[selectedIndex + 1 <= gorillas.length - 1 ? selectedIndex + 1 : 0].image);
  const [imagePrincipal, setImagePrincipal] = useState(gorillas[selectedIndex].image);

  useEffect(() => {
    setImageLeft(gorillas[getLeftIndex()].image);
    setImagePrincipal(gorillas[selectedIndex].image);
    setImageRight(gorillas[getRightIndex()].image);
  }, [selectedIndex]);

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

            <div className="clans-slider-title">TROOPS</div>

            <div className="clans-slider-subtitle">Scanning...</div>
          </div>
        </div>
      </div>

      <div className="row h-100">
        <div className="mb-5 col-12 ">
          <img src={DotsDecoration} alt="" className="img-detail dots" />
          <div className="row h-100">
            <div className="col-lg-3 col-12 d-none d-lg-flex align-items-center clans-slider-gorilla-left justify-content-center">
              <img src={imageLeft} alt="Gorilla" className="clans-slider-gorilla-img" onClick={() => decrement()} />
            </div>
            <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
              <span className="btn clans-slider-arrow-left position-absolute d-lg-flex d-none" onClick={() => decrement()}>
                <img src={LeftArrow} alt="left arrow" />
              </span>
              <img src={imagePrincipal} alt="Gorilla" className="clans-slider-gorilla-img " />
              <span className="btn clans-slider-arrow-right d-lg-flex d-none position-absolute" onClick={() => increment()}>
                <img src={RightArrow} alt="right arrow" />
              </span>
            </div>
            <div className="col-lg-3 col-12 d-none d-lg-flex align-items-center clans-slider-gorilla-right justify-content-center">
              <img src={imageRight} alt="Gorilla" className="clans-slider-gorilla-img" onClick={() => increment()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClansSlider;
