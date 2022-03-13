import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../static/images/header/Logo.png';
import LanguageIcon from '../static/images/header/LanguageIcon.png';
import { FaBars } from 'react-icons/fa';
import actions from '../store/actions';
import arrowLight from '../static/images/icon-arrow-right-single-light.png';
import './Header.scss';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  // const { walletAddress, isAuthenticated } = useSelector((state) => state?.auth);
  // const { nft } = useSelector((state) => state?.nft);
  const dispatch = useDispatch();
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
    <>
      <section className="banner">
        <div className="gradient"></div>
        <div className={x.join('nav-top ')}>
          <div className="container-xl">
            <div className="nav-container">
              <div className="nav-brand">
                <div className="navbar-brand">
                  <a href="/">
                    <img src={Logo} className="img-fluid" alt="Logo" />
                  </a>
                </div>
              </div>
              <ul className="nav" id="nav">
                <li className="nav-item pt-3 d-flex d-md-none justify-content-end">
                  <button className="btn btn-clear" id="menu-toggle" onClick={() => toggleSideMenu()}>
                    <i className="fas fa-times txt-color-white"></i>
                  </button>
                </li>
                <li className="nav-item nav-item-lang">
                  <img src={LanguageIcon} alt="lang selector" id="lang-selector" className="lang-selector" />
                  &nbsp;
                  <span className="lang-options">
                    <span className="lang-en active" id="lang-en">
                      EN
                    </span>
                    <span className="separator">&nbsp; / &nbsp;</span>
                    <span className="lang-es" id="lang-es">
                      ES
                    </span>
                  </span>
                </li>
                <li className="nav-item">
                  <div className="nav-link" onClick={() => scrollTo('main-home-slider', 20)}>
                    Silverback City
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <div
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Citizens / Zones
                  </div>
                  <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                    <div className="dropdown-item nav-link p-2 text-capitalize" onClick={() => scrollTo('bidsarena', 100)}>
                      Bids Arena
                    </div>
                    <div className="dropdown-item nav-link p-2 text-capitalize" onClick={() => scrollTo('vault', 100)}>
                      The Vault
                    </div>
                    <div className="dropdown-item nav-link p-2 text-capitalize" onClick={() => scrollTo('nft-lab', 100)}>
                      NFT Lab
                    </div>
                    <div className="dropdown-item nav-link p-2 text-capitalize" onClick={() => scrollTo('silvershop', 100)}>
                      Silver Shop
                    </div>
                    <div className="dropdown-item nav-link p-2 text-capitalize" onClick={() => scrollTo('exchange', 20)}>
                      Token
                    </div>
                    <div className="dropdown-item nav-link p-2 text-capitalize" onClick={() => scrollTo('lounge', 100)}>
                      Underground Lounge
                    </div>
                    {/*<div className="dropdown-item nav-link p-2 text-capitalize" onClick={() => scrollTo('foundry', 100)}>
                        Foundry
                      </div>*/}
                  </div>
                </li>
                <li className="nav-item" onClick={() => scrollTo('metaverse-story', 50)}>
                  <div className="nav-link">Story</div>
                </li>
                {/* IMPORTANT: BUTTONS HIDDEN WITH d-none CLASS */}
                <li className="nav-item d-none" id="problematic-button">
                  <div
                    className="ml-auto d-flex flex-wrap "
                    style={{
                      gap: '1rem',
                    }}
                  >
                    <ul className="navbar-nav ml-auto d-flex justify-content-center align-items-center">
                      <li className="nav-item m-0">
                        {/*isAuthenticated && walletAddress ? (
                          <div className="button-container">
                            <button className="btn btn-outline-danger ml-3 " onClick={() => dispatch(actions.authActions.logOutUser())}>
                              Disconect
                            </button>
                          </div>
                        ) : (*/
                          <div className="button-container">
                            <button type="button" className="btn " onClick={() => /*dispatch(actions.blockChainActions.connectToMetaMask)*/ null}>
                              Connect Wallet
                            </button>
                          </div>
                        /*)*/}
                      </li>
                    </ul>
                    <div className="nav-item m-0">
                      <div className="button-container">
                        <button type="button" className="btn " onClick={() => /*dispatch(actions.blockChainActions.connectToMetaMask)*/ null}>
                          Mint NFT
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              <button className="btn btn-clear px-0 d-block d-md-none" id="menu-toggle" onClick={() => toggleSideMenu()}>
                <div className="navbar-toggler-icon">
                  <FaBars />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
