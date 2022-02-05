import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../static/images/logo.svg';
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
        <div className="banner-bg">
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
                    <img src="/src/static/images/header/lang" alt="lang selector" id='lang-selector' className='lang-selector' />
                    <span className='lang-options'>
                      <span className="lang-en" id='lang-en'>
                        EN
                      </span>
                      /
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
                      href="/"
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
                  <li className="nav-item">
                    <ul className="navbar-nav ml-auto d-flex justify-content-center align-items-center">
                      <li className="nav-item m-0">
                        {isAuthenticated && walletAddress ? (
                          <button className="btn btn-outline-danger ml-3 " onClick={() => dispatch(actions.authActions.logOutUser())}>
                            Disconect
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="btn btn-outline-bgalpha "
                            onClick={() => dispatch(actions.blockChainActions.connectToMetaMask)}
                          >
                            Connect Wallet
                          </button>
                        )}
                      </li>
                      <li className="nav-item m-0">
                        <button
                          type="button"
                          className="btn btn-outline-bgalpha "
                          onClick={() => dispatch(actions.blockChainActions.connectToMetaMask)}
                        >
                          Mint NFT
                        </button>
                      </li>
                    </ul>
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
          <div className="container">
            <div className="banner-content">
              <div className="row">
                <div className="col-6 my-5 py-5">
                  <h2>Discover the New Way to Buy Silver</h2>

                  <p className="color-alpha my-3 py-2">
                    <img className="mr-2" alt="" src={arrowLight} height={15} />
                    Earn more rewards by buying different silver products on our ecommerce store.
                  </p>
                  <button className="btn btn-outline-bgalpha " onClick={() => dispatch(actions.authActions.logOutUser())}>
                    SHOP NOW
                  </button>
                </div>
                <div className="col-6 my-5 d-flex justify-content-around">
                    <div className="align-self-center justify-content-center align-content-center">
                      <img className="mx-2" alt={nft?.itemName} src={`nft/${nft?.imagePath}`} height={500} />
                    </div>
                    <div className="d-block text-white align-self-center">
                      <h4>Silver Silverback</h4>
                      <h5>BNB {nft && nft.gasFee ? nft.gasFee.toString().substring(1, nft.gasFee.toString().length) : ''}</h5>
                      
                    </div>
                  </div>
                
                <div className="col-12 d-none d-xl-block my-4 py-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
