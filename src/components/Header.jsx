import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../static/images/header/Logo.png';
import LanguageIcon from '../static/images/header/LanguageIcon.png';
import { FaBars } from 'react-icons/fa';
import actions from '../store/actions';
import arrowLight from '../static/images/icon-arrow-right-single-light.png';
import "./Header.scss"

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { walletAddress, isAuthenticated } = useSelector((state) => state?.auth);
  const { nft } = useSelector((state) => state?.nft);
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

  const scrollTo = (ancla) => {
    let x = document.querySelector('#' + ancla);
    if (x) {
      x.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
    return false;
  };

  return (
    <>
      <section className="banner">
        <div className={x.join('nav-top ')}>
          <div className="container-xl">
            <div className="nav-container">
              <div className="nav-brand">
                <div className="navbar-brand">
                  <a href="http://silverstonks.io">
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
                  <img src={LanguageIcon} alt="lang selector" id='lang-selector' className='lang-selector' />
                  &nbsp;
                  <span className='lang-options'>
                    <span className="lang-en active" id='lang-en'>
                      EN
                    </span>
                    <span className="separator">
                      &nbsp;
                      /
                      &nbsp;
                    </span>
                    <span className="lang-es" id='lang-es'>
                      ES
                    </span>
                  </span>
                </li>
                <li className="nav-item">
                  <a href="https://www.silverstonks.com/" className="nav-link" onClick={() => scrollTo('city')}>
                    Silverback City
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Citizens / Zones
                  </a>
                  <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                    <a className="dropdown-item nav-link p-2 text-capitalize" href="/">
                      Bids Arena
                    </a>
                    <a className="dropdown-item nav-link p-2 text-capitalize" href="/">
                      The Vault
                    </a>
                    <a className="dropdown-item nav-link p-2 text-capitalize" href="/">
                      NFT Lab
                    </a>
                    <a className="dropdown-item nav-link p-2 text-capitalize" href="/">
                      Silver Shop
                    </a>
                    <a className="dropdown-item nav-link p-2 text-capitalize" href="/">
                      Token
                    </a>
                    <a className="dropdown-item nav-link p-2 text-capitalize" href="/">
                      Underground Lounge
                    </a>
                  </div>
                </li>
                <li className="nav-item" onClick={() => scrollTo('story')}>
                  <a href="/" className="nav-link">
                    Story
                  </a>
                </li>
                <li className="nav-item" id='problematic-button'>
                  <div className="ml-auto d-flex flex-wrap" style={{
                    gap: '1rem',
                  }}>

                    <ul className="navbar-nav ml-auto d-flex justify-content-center align-items-center">
                      <li className="nav-item m-0">
                        {isAuthenticated && walletAddress ? (
                          <div className="button-container">

                            <button className="btn btn-outline-danger ml-3 " onClick={() => dispatch(actions.authActions.logOutUser())}>
                              Disconect
                            </button>
                          </div>
                        ) : (
                          <div className="button-container">
                            <button
                              type="button"
                              className="btn "
                              onClick={() => dispatch(actions.blockChainActions.connectToMetaMask)}
                            >
                              Connect Wallet
                            </button>
                          </div>
                        )}
                      </li>
                    </ul>
                    <div className="nav-item m-0">
                      <div className="button-container">

                        <button
                          type="button"
                          className="btn "
                          onClick={() => dispatch(actions.blockChainActions.connectToMetaMask)}
                        >
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
