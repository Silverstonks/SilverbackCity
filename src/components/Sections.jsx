import React from 'react';
import BidsarenaImg from '../static/images/sections/stadio_ilustracion.gif';
import BidsarenaIcon from '../static/images/slider/IconBidsarena.png';
import PropertyHoldersImg from '../static/images/slider/propertyholders.jpg';
import PropertyHoldersIcon from '../static/images/slider/IconPropertyholders.png';
import GreenBoxTitle from '../static/images/sections/GreenBoxTitle.png';
import VaultImg from '../static/images/sections/vault_ilustracion.gif';
import VaultIcon from '../static/images/slider/IconVault.png';
import ExchangeImg from '../static/images/sections/EXCHANGE_ILUSTRACION.gif';
import ExchangeIcon from '../static/images/slider/IconExchange.png';
import SilverShopImg from '../static/images/sections/shop_ilustracion.gif';
import SilverShopIcon from '../static/images/slider/IconEcommerce.png';
import LoungeImg from '../static/images/sections/underground_ilustracion.gif';
import LoungeIcon from '../static/images/slider/IconLounge.png';
import FoundryImg from '../static/images/sections/FOUNDRY_ILUSTRACION.jpg';
import FoundryIcon from '../static/images/slider/IconFoundry.png';
import DotsDecoration from '../static/images/slider/DotsDecoration.png';
import StakingIcon from '../static/images/slider/IconStaking.png';
import StakingImg from '../static/images/sections/SectionStaking.gif';
import { useTranslation } from 'react-i18next';

const Sections = () => {
  return (
    <div className="container mx-auto sections">
      <SectionItemImgRight id="propertyholders" icon={PropertyHoldersIcon} img={PropertyHoldersImg} btnHref={`https://propertyholders.io/`} />
      <div className="d-flex justify-content-end ">
        <img src={DotsDecoration} alt="" className="mr-5 my-4" />
      </div>
      <SectionItemImgLeft id="silvershop" icon={SilverShopIcon} img={SilverShopImg} btnHref={`https://silverstonks.com/`} />
      <SectionItemImgRight id="vault" icon={VaultIcon} img={VaultImg} btnHref={`https://collectibles.silverstonks.com/`} />
      <SectionItemImgLeft id="lounge" icon={LoungeIcon} img={LoungeImg} btnHref={`https://discord.com/invite/6q9hQcmYq5`} />
      <SectionItemImgRight id="exchange" icon={ExchangeIcon} img={ExchangeImg} btnHref={`https://silverstonks.io`} />
      <div className="d-flex justify-content-center ">
        <img src={DotsDecoration} alt="" className="mr-5 my-4" style={{ transform: 'rotate(90deg)' }} />
      </div>
      {/*<SectionItemImgLeft id="foundry" icon={FoundryIcon} img={FoundryImg} />*/}
      <SectionItemImgLeft id="staking" icon={StakingIcon} img={StakingImg}  btnHref={`https://staking.silverstonkstoken.com/`}/>
      <SectionItemImgRight id="bidsarena" icon={BidsarenaIcon} img={BidsarenaImg} btnHref={'https://bidsarena.com/'} />
    </div>
  );
};

const SectionItemImgRight = ({ id = '', icon, img, btnHref = null }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'sections' });
  return (
    <div className="row">
      <div className="section-item-img-right col-12 m-lg-auto mb-5">
        <div className="row flex-md-column-reverse flex-column flex-lg-row ">
          
          <div className="col-lg-6 d-flex col-12 flex-column justify-content-between pr-5 my-5">
            <div className="title-container mb-3" id={id}>
              <img className="" id="title-background" src={GreenBoxTitle} alt="" />
              <img className="" id="title-icon" src={icon} alt="" />
              <span id="title-text" className="h5">
                {t(id + '.title')}
              </span>
            </div>

            <div className="">
              <p>{t(id + '.text')}</p>
            </div>

            <div className="button-container">
              <button onClick={() => (btnHref ? window.open(btnHref) : null)}>{t(id + '.buttonText')}</button>
            </div>
          </div>

          <div className="col-lg-6 col-12 my-5 d-flex align-item-center ">
            <img className="" src={img} alt="" height="300px"  style={{ maxWidth: '100%' }}/>
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionItemImgLeft = ({ id = '', icon, img, btnHref = null }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'sections' });
  return (
    <div className="row ">
      <div className="section-item-img-left col-12 m-lg-auto mb-5 ">
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-lg-6 col-12 my-5">
            <img className="" src={img} alt="" height="300px" style={{ maxWidth: '100%' }} />
          </div>

          <div className="col-lg-6 col-12 d-flex flex-column justify-content-between pl-5 my-5">
            <div className="title-container ml-auto mb-3" id={id}>
              <img className="" id="title-background" src={GreenBoxTitle} alt="" />
              <img className="" id="title-icon" src={icon} alt="" />
              <span id="title-text" className="h5">
                {t(id + '.title')}
              </span>
            </div>

            <div className="">
              <p>{t(id + '.text')}</p>
            </div>

            <div className="button-container">
              <button onClick={() => (btnHref ? window.open(btnHref) : null)}>{t(id + '.buttonText')}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections;
