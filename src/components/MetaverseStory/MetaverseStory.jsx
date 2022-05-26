import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LeftArrow from '../../static/images/gorillas-slider/LeftArrow.png';
import RightArrow from '../../static/images/gorillas-slider/RightArrow.png';
import TitleDecoration from '../../static/images/sections/HistoryTitleDecoration.png';
import { storyConfig } from './MetaverseStory.constant';
import './MetaverseStory.scss';

const initialIndex = 0;

export const MetaverseStory = () => {
  const [slides] = useState(storyConfig);
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const { t } = useTranslation('translation', { keyPrefix: 'metaverse_story' });

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
  const handleMouseUp = () => {
    if (touchEnd > 0 && touchStart - touchEnd > 150) {
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

  const { image } = slides[selectedIndex];

  return (
    <div id="metaverse-story" className="metaverse-story-container mt-5">
      <div className="metaverse-story-title-container">
        <div className="metaverse-story-title-background">
          <img src={TitleDecoration} alt="" className="metaverse-story-title-background-img" />
        </div>
        <span className="metaverse-story-title">{t('title')}</span>
        <span className="metaverse-story-subtitle">{t('subtitle')}</span>
      </div>

      <div
        className="metaverse-story"
        onTouchStart={(touchStartEvent) => handleTouchStart(touchStartEvent)}
        onTouchMove={(touchMoveEvent) => handleTouchMove(touchMoveEvent)}
        onTouchEnd={() => handleMouseUp()}
        onMouseDown={(mouseDownEvent) => handleMouseDown(mouseDownEvent)}
        onMouseMove={(mouseMoveEvent) => handleMouseMove(mouseMoveEvent)}
        onMouseUp={() => handleMouseUp()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <div className="metaverse-story-img-container">
          <img className="metaverse-story-img" src={image} onClick={() => increment()} alt="story background img" />
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
            <p className="metaverse-story-text w-75 m-auto">{t('slides.' + selectedIndex + '.text')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaverseStory;
