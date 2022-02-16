import { useEffect } from 'react';

export const ClansSliderImage = ({ image, callBack }) => {
  useEffect(() => {}, [image]);

  return <img src={image} alt="Gorilla" className="clans-slider-gorilla-img" onClick={() => (!!callBack ? callBack() : null)} />;
};

export default ClansSliderImage;
