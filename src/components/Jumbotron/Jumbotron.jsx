import React from 'react';
import './Jumbotron.scss';
import Logo from '../../static/images/header/Logo.svg';

import ButtonDecorationCorners from '../../static/images/header/ButtonDecorationCorners.png';
import ButtonDecorationBar from '../../static/images/header/ButtonDecorationBar.png';
import { useTranslation } from 'react-i18next';

export const Jumbotron = () => {
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'jumbotron' });
  return (
    <div className="jumbotron-container d-flex flex-column justify-content-center ">
      <img src={Logo} alt="" className="w-25 mx-auto my-5" />
      <div className="button-decoration mx-auto">
        <div className="button-container h-75 mx-2 my-2">
          <a href="https://discord.com/invite/6q9hQcmYq5">
            <button className="h-100 information">ENTER</button>
          </a>
        </div>
        <div className="decoration-bar">
          <img src={ButtonDecorationBar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
