import React from 'react';
import BidsarenaImg from '../static/images/sections/BidsarenaSection.png';
import BidsarenaIcon from '../static/images/slider/IconBidsarena.png';
import GreenBoxTitle from '../static/images/sections/GreenBoxTitle.png';
import VaultImg from '../static/images/sections/VaultSection.png';
import VaultIcon from '../static/images/slider/IconVault.png';
import ExchangeImg from '../static/images/sections/ExchangeSection.png';
import ExchangeIcon from '../static/images/slider/IconExchange.png';
import SilverShopImg from '../static/images/sections/SilverShopSection.png';
import SilverShopIcon from '../static/images/slider/IconEcommerce.png';
import LoungeImg from '../static/images/sections/LoungeSection.png';
import LoungeIcon from '../static/images/slider/IconLounge.png';
import FoundryImg from '../static/images/sections/FoundrySection.png';
import FoundryIcon from '../static/images/slider/IconFoundry.png';
import DotsDecoration from '../static/images/slider/DotsDecoration.png';
import { useTranslation } from 'react-i18next';

const Sections = () => {
  return (
    <div className="container mx-auto sections" >
      <SectionItemImgRight
        id="bidsarena"
        icon={BidsarenaIcon}
        title="BIDSARENA"
        buttonText={'COMING SOON'}
        img={BidsarenaImg}
        text="Win purchasing power with our first Play 2 Earn game. Use your bids to win your favorite products at incredible prices. Every auction starts at $0.00 and has a timer. Each bid increases the price by $0.01 and resets the timer by 10 seconds. The last bidder to place a bid before the time runs out wins the item at a price much lower than the regular retail price."
      />
      <div className="d-flex justify-content-end ">
        <img src={DotsDecoration} alt="" className="mr-5 my-4" />
      </div>
      <SectionItemImgLeft
        id="silvershop"
        icon={SilverShopIcon}
        title="SILVER SHOP"
        buttonText={'INVEST IN SILVER'}
        img={SilverShopImg}
        btnHref={`https://silverstonks.com/`}
        text={`Buy physical silver in Silver Stonks’ Silver Shop to protect yourself against inflation. We take a spin on traditional bullion by making products that appeal to a wider demographic, connecting blockchain with the traditional world of investing in precious metals. Each silver product is tied to a digital certificate of authenticity. \n\nOwning our silver bars allows you to claim certificates of authenticity in your digital wallet, which can then be used to earn interest on your silver every month in SSTX.`}
      />
      <SectionItemImgRight
        id="vault"
        icon={VaultIcon}
        title="THE VAULT"
        buttonText={'COMING SOON'}
        img={VaultImg}
        text={`In the Vault you can store your SSTX tokens and digital silver certificates to earn interest in SSTX. There are three ways you can earn interest:\n- Store your SSTX tokens and earn up to 12% APY.\n- Store your NFT certificates from your physical silver purchases to earn interest up to 6% APY.\n- Store the digital silver you earn in our Play 2 Earn games up to 12%. You need a Silverback NFT to earn passive income in the Play 2 Earn games.`}
      />
      <SectionItemImgLeft
        id="lounge"
        icon={LoungeIcon}
        title={'UNDERGROUND\nLOUNGE'}
        buttonText={'COMING SOON'}
        img={LoungeImg}
        text="Each Silverback holder will have access to the Underground Lounge, an exclusive chatroom to talk about the latest news from everything in crypto to the precious metals market. "
      />
      <SectionItemImgRight
        id="exchange"
        icon={ExchangeIcon}
        title="SSTX EXCHANGE"
        buttonText={'BUY SSTX'}
        img={ExchangeImg}
        btnHref={`https://silverstonks.io`}
        text="Purchase SSTX using BNB or swap any BSC token for SSTX."
      />
      <div className="d-flex justify-content-center ">
        <img src={DotsDecoration} alt="" className="mr-5 my-4" style={{ transform: 'rotate(90deg)' }} />
      </div>
      <SectionItemImgLeft
        id="foundry"
        icon={FoundryIcon}
        title="FOUNDRY"
        buttonText={'COMING SOON'}
        img={FoundryImg}
        text="Visit the Foundry to melt the digital silver and gold you earn in our Play 2 Earn games with your NFT avatar. Once you collect enough precious metals, you can shape your silver or gold into bars and coins. When you create your digital bars and coins, you receive a certificate of authenticity for your precious metals in a form of an NFT. Store them in our vault to earn interest on your digital precious metals. Earn interest in SSTX tokens and use them to buy physical precious metals and other hard assets in our Silver Shop, or accumulate tokens and stake them directly to get paid in SSTX and begin earning passive income."
      />
    </div>
  );
};

const SectionItemImgRight = ({ id = '', icon, title, text, buttonText, img, btnHref = null }) => {
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'sections' });
  return (
    <div className="row">
      <div className="section-item-img-right col-12 m-lg-auto mb-5">
        <div className="row flex-column-reverse flex-lg-row ">
          <div className="col-lg-6 d-flex col-12 flex-column justify-content-between pr-5 my-5">
            <div className="title-container mb-3" id={id}>
              <img className="" id="title-background" src={GreenBoxTitle} alt="" />
              <img className="" id="title-icon" src={icon} alt="" />
              <span id="title-text" className="h5">
                {title}
              </span>
            </div>

            <div className="">
              <p>{text}</p>
            </div>

            <div className="button-container ">
            <button  onClick={() => (btnHref ? window.open(btnHref) : null)}>{buttonText}</button>
            </div>
          </div>

          <div className="col-lg-6 col-12 my-5 d-flex align-item-center ">
            <img className="" src={img} alt="" height="300px" />
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionItemImgLeft = ({ id = '', icon, title, text, buttonText, img, btnHref = null }) => {
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'sections' });
  return (
    <div className="row ">
      <div className="section-item-img-left col-12 m-lg-auto mb-5 ">
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-lg-6 col-12 my-5">
            <img className="" src={img} alt="" height="300px" style={{ maxWidth: '555px' }} />
          </div>

          <div className="col-lg-6 col-12 d-flex flex-column justify-content-between pl-5 my-5">
            <div className="title-container ml-auto mb-3" id={id}>
              <img className="" id="title-background" src={GreenBoxTitle} alt="" />
              <img className="" id="title-icon" src={icon} alt="" />
              <span id="title-text" className="h5">
                {title}
              </span>
            </div>

            <div className="">
              <p>{text}</p>
            </div>

            <div className="button-container">
              <button  onClick={() => (btnHref ? window.open(btnHref) : null)}>{buttonText}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections;
