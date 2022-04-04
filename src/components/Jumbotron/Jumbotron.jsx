import React, { useEffect, useState } from 'react';
import './Jumbotron.scss';
import Logo from '../../static/images/header/Logo2.png';

import ButtonDecorationBar from '../../static/images/header/ButtonDecorationBar.png';
import { useTranslation } from 'react-i18next';

export const Jumbotron = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'jumbotron' });
  const countDownDate = new Date('2022-07-16 18:00');
  const intervalTime = 1000;
  // Update the count down every 1 second
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const scrollTo = (ancla = 'mint-card', offset = 20) => {
    let x = document.querySelector('#' + ancla);
    if (x) {
      //x.scrollIntoView({ block: 'start', behavior: 'smooth' });
      const y = x.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    return false;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      var distance = countDownDate.getTime() - new Date().getTime(); // Time calculations for days, hours, minutes and seconds

      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
    }, intervalTime);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="jumbotron-container d-flex flex-column justify-content-center ">
      <img src={Logo} alt="" className="w-25 mx-auto my-5" />
      <div className="button-decoration mx-auto">
        <div className="button-container h-75 mx-2 my-2">
          <a onClick={() => scrollTo()}  >
            <button className="h-100 information">{t('button')}</button>
          </a>
        </div>
        <div className="decoration-bar">
          <img src={ButtonDecorationBar} alt="" />
        </div>
      </div>
        <div className="row">
          <h1 className='col-12 d-flex justify-content-center countdown-container mt-4'>
            <span className='day-countdown'>{days}&nbsp;:&nbsp;</span>
            <span className='hour-countdown'>{hours}&nbsp;:&nbsp;</span>
            <span className='minute-countdown'>{minutes}&nbsp;:&nbsp;</span>
            <span className='second-countdown'>{seconds}</span>
          </h1>
          <div className='col-12 d-flex justify-content-center text-white countdown-container'>
            <span>{t('countdown.days')}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>{t('countdown.hours')}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>{t('countdown.minutes')}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className='second-countdown'>{t('countdown.seconds')}</span>
          </div>
        </div>
    </div>
  );
};

export default Jumbotron;

/* chrackra bold y poppings */
