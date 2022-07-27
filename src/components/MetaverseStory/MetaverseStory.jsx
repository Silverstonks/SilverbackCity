import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LeftArrow from '../../static/images/gorillas-slider/LeftArrow.png';
import RightArrow from '../../static/images/gorillas-slider/RightArrow.png';
import TitleDecoration from '../../static/images/sections/HistoryTitleDecoration.png';
import { storyConfig } from './MetaverseStory.constant';
import './MetaverseStory.scss';

const initialIndex = 0;

export const MetaverseStory = () => {


  return (
    <div id="metaverse-story" className="metaverse-story-container mt-5">
      <div className="metaverse-story-title-container">
        <object data="https://www.youtube.com/embed/nliesWIK4xs?controls=0"
          width="853" height="480"></object>
      </div>
    </div>
  );
};


export default MetaverseStory;

