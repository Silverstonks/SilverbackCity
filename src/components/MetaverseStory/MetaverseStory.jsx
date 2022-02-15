import React, { useState } from 'react';
import LeftArrow from '../../static/images/gorillas-slider/LeftArrow.png';
import RightArrow from '../../static/images/gorillas-slider/RightArrow.png';
import TitleDecoration from '../../static/images/sections/HistoryTitleDecoration.png';
import { storyConfig } from './MetaverseStory.constant';
import './MetaverseStory.scss';


const initialIndex = 0;

const strings = {
  title: 'METAVERSE STORY',
  subtitle: 'THE BEGINNING',
};

export const MetaverseStory = () => {
  const [slides] = useState(storyConfig);
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);

  const step = (nextStepIndex) => {

    // Seguridad de que no se pase, ni de más ni de menos
    if (nextStepIndex >= slides.length) nextStepIndex = 0;
    else if (nextStepIndex < 0) nextStepIndex = slides.length - 1;

    setSelectedIndex(nextStepIndex);
  };

  const increment = () => {
    step(selectedIndex + 1);
  };

  const decrement = () => {
    step(selectedIndex - 1);
  };

  const renderPageIndex = (index) => {
    const newIndex = (index = parseInt(index));

    const onPageIndexClick = () => {
      setSelectedIndex(newIndex);
    };

    const classes = ['metaverse-story-page-index', 'btn'];
    if (selectedIndex === newIndex) classes.push('active');

    return (
      <button className={classes.join(' ')} key={`page-index-${newIndex}`} onClick={onPageIndexClick}>
        {parseInt(newIndex) + 1}
      </button>
    );
  };

  const { image, text } = slides[selectedIndex];

  return (
    <div id="metaverse-story" className="metaverse-story-container mt-5">
      <div className="metaverse-story-title-container">
        <div className="metaverse-story-title-background">
          <img src={TitleDecoration} alt="" className="metaverse-story-title-background-img" />
        </div>
        <span className="metaverse-story-title">{strings.title}</span>
        <span className="metaverse-story-subtitle">{strings.subtitle}</span>
      </div>

      <div className="metaverse-story">
        <div className="metaverse-story-img-container">
          <img className="metaverse-story-img" src={image} alt="story background img" />
        </div>

        <div className="metaverse-story-details">
          <div className="metaverse-story-controls my-2">
            <button className="arrow-left btn p-0" onClick={() => decrement()}>
              <img src={LeftArrow} alt="arrow left" className="arrow-left" />
            </button>

            {Object.keys(slides).map(renderPageIndex)}

            <button className="arrow-right btn p-0" onClick={() => increment()}>
              <img src={RightArrow} alt="arrow right" className="arrow-right" />
            </button>
          </div>

          <div className="metaverse-story-text-container">
            <p className="metaverse-story-text w-75 m-auto">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaverseStory;
