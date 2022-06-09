import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../store/actions';
import { toast } from 'react-toastify';
import Logo from '../static/images/header/Logo.png';
import Bidsarena from '../static/images/slider/IconBidsarena.png';
import PropertyHolders from '../static/images/slider/IconPropertyholders.png';
import Ecommerce from '../static/images/slider/IconEcommerce.png';
import Exchange from '../static/images/slider/IconExchange.png';
import Foundry from '../static/images/slider/IconFoundry.png';
import Lounge from '../static/images/slider/IconLounge.png';
import Meta from '../static/images/slider/IconMeta.png';
import NftLab from '../static/images/slider/IconNftLab.png';
import Vault from '../static/images/slider/IconVault.png';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation('translation', { keyPrefix: 'footer' });

  /*const [loadingNewsletter, setloadingNewsletter] = useState(false);
  const { emailNewsletter, errorEmailNewsletter } = useSelector((state) => state.application);

  useEffect(() => {
    if (!!emailNewsletter) {
      toast.success(`Succesfully subscribed: ${emailNewsletter}`, { position: 'bottom-right' });
    }
    setloadingNewsletter(false);
  }, [emailNewsletter]);

  useEffect(() => {
    if (errorEmailNewsletter) {
      toast.error('Subscription Error', { position: 'bottom-right' });
    }
    setloadingNewsletter(false);
  }, [errorEmailNewsletter]);

  const onClickNewsletter = () => {
    const email = document.getElementsByName('email')[0];
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email.value)) {
      setloadingNewsletter(true);
      dispatch(actions.applicationActions.subscribeNewsletter(email.value));
    } else {
      email.value = '';
    }
  };*/

  const [scrolled, setScrolled] = useState(false);
  // const { walletAddress, isAuthenticated } = useSelector((state) => state?.auth);
  // const { nft } = useSelector((state) => state?.nft);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  let x = ['nav-top'];
  if (scrolled) {
    x.push('scrolled stick');
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const toggleSideMenu = () => {
    console.log('menu active');
    document.getElementById('nav').classList.toggle('active');
  };

  const scrollTo = (ancla, offset = 0) => {
    let x = document.querySelector('#' + ancla);
    if (x) {
      //x.scrollIntoView({ block: 'start', behavior: 'smooth' });
      const y = x.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    return false;
  };

  return (
    <footer>
      <div className="container-fluid d-flex row footer-container">
        <div className="d-flex flex-column align-items-center my-md-5">
          <img className="mt-5 mb-2" src={Logo} alt="" />
          <div className="button-container my-3 d-none">
            <button className="">Connect Wallet</button>
          </div>
          <div className="button-container d-none">
            <button className="">Mint</button>
          </div>
        </div>
        <div className="row mt-5 pt-md-5">
          <div className="col-6 col-md">
            <ul>
              <li className="py-1" onClick={() => scrollTo('PropertyHolders', 100)}>
                <p className="d-flex">
                  <img src={PropertyHolders} alt="This is an image of the Property Holders logo." width="20px" className="mr-2" /> {t('link.arena')}
                </p>
              </li>
              <li className="py-1" onClick={() => scrollTo('nft-lab', 100)}>
                <p className="d-flex">
                  <img src={NftLab} alt="This is an image of the Silver Stonks NFT lab, with a Troop of Silverback City in the making." width="25px" className="mr-2" />
                  {t('link.nftlab')}
                </p>
              </li>
              <li className="py-1" onClick={() => scrollTo('vault', 100)}>
                <p className="d-flex">
                  <img src={Vault} alt="This is an image of the Silver Stonks digital vault for staking SSTX tokens or precious metals." width="20px" className="mr-2" />
                  {t('link.vault')}
                </p>
              </li>
               <li className="py-1" onClick={() => scrollTo('bidsarena', 100)}>
                <p className="d-flex">
                  <img src={Bidsarena} alt="This is an image of Bids Arena, the Silver Stonks marketplace for other hard assets you will be able to buy with SSTX." width="20px" className="mr-2" /> {t('link.arena')}
                </p>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <ul>
              <li className="py-1" onClick={() => scrollTo('lounge', 100)}>
                <p className="d-flex">
                  <img src={Lounge} alt="This is an image of the Silver Stonks underground lounge in Silverback City. Join the DIscord to be a part of the chat." width="20px" className="mr-2" />
                  <span>{t('link.lounge')}</span>
                </p>
              </li>
              <li className="py-1" onClick={() => scrollTo('exchange', 100)}>
                <p className="d-flex">
                  <img src={Exchange} alt="This is an image of the Silver Stonks exchange where you can purchase SSTX." width="20px" className="mr-2" />
                  <span>{t('link.exchange')}</span>
                </p>
              </li>
              <li className="py-1" onClick={() => scrollTo('silvershop', 100)}>
                <p className="d-flex">
                  <img src={Ecommerce} alt="This is an image of the Silver Stonks shop that sells precious metals." width="20px" className="mr-2" />
                  <span>{t('link.ecommerce')}</span>
                </p>
              </li>
              <li className="py-1" onClick={() => scrollTo('meta-advertising', 100)}>
                <p className="d-flex">
                  <img src={Meta} alt="This is an image of the Silver Stonks meta advertising in the Silverback City metaverse." width="20px" className="mr-2" />
                  <span>{t('link.avertising')}</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container-xl py-4">
          <div className="row justify-content-between">
            <div className="col-md-4 txt-color-white text-center text-md-left">{t('copyright')}</div>
            <div className="col-md-4 text-center txt-color-white">
              <a href="https://silverstonks.io/privacy.html" className="txt-color-white ">
                {t('privacy_policy')}
              </a>
              <span className="px-3">|</span>
              <a href="https://silverstonks.io/terms.html" className="txt-color-white ">
                {t('terms_and_conditions')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
