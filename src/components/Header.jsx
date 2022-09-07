import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../static/images/logo.svg';
import { FaBars } from 'react-icons/fa';
import actions from '../store/actions';
import arrowLight from '../static/images/icon-arrow-right-single-light.png';
import ClaimButton from './ClaimButton';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { walletAddress, isAuthenticated } = useSelector((state) => state.auth);
  const { nft } = useSelector((state) => state.nft);
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

  const showLoginModal = () => {
    dispatch(actions.applicationActions.updateModalStep(3))
    dispatch(actions.applicationActions.updateModalState(true))
  }

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
                  <li className="nav-item">
                    <a href="https://www.silverstonks.com/" className="nav-link">
                      SHOP
                    </a>
                  </li>
                  <li className="nav-item" onClick={() => scrollTo('buy-sstx')}>
                    <div className="nav-link">BUY SSTX</div>
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
                      ABOUT NFTs
                    </a>
                    <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                      <div className="dropdown-item nav-link p-2 text-capitalize" onClick={() => scrollTo('other-certificates')}>
                        Other Popular Certificates
                      </div>
                      <div className="dropdown-item nav-link p-2 text-capitalize" onClick={() => scrollTo('silver-stonks-collectibles')}>
                        Introducing Silver Stonks collectibles
                      </div>
                      <div className="dropdown-item nav-link p-2 text-capitalize" onClick={() => scrollTo('nft-certificate')}>
                        Why Silver Stonks Certificates?
                      </div>
                      <div className="dropdown-item nav-link p-2 text-capitalize" onClick={() => scrollTo('section-metaverse')}>
                        A growing Silver Stonks Ecosystem
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <ul className="navbar-nav ml-auto d-flex justify-content-center align-items-center">
                      <li className="nav-item m-0">
                        {isAuthenticated && walletAddress ? (
                          <button className="btn btn-outline-danger ml-3 " onClick={() => dispatch(actions.authActions.logOutUser())}>
                            DISCONNECT
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="btn btn-outline-bgalpha "
                            onClick={() => showLoginModal()}
                          >
                            CONNECT WALLET
                          </button>
                        )}
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
                  <h2>The New Way to Buy Precious Metals</h2>

                  <p className="color-alpha my-3 py-2">
                    <img className="mr-2" alt="" src={arrowLight} height={15} />
                    Earn more rewards on all of our products on our ecommerce store, and start building wealth in hard assets.
                  </p>
                  <button className="btn btn-outline-bgalpha " onClick={() => dispatch(actions.authActions.logOutUser())}>
                    SHOP NOW
                  </button>
                </div>
                <div className="col-6 my-5 d-flex justify-content-around d-none">
                  <div className="align-self-center justify-content-center align-content-center">
                    <img className="mx-2" alt={nft?.itemName} src={`nft/${nft?.imagePath || 'Sempsa-Silver-Bar-1000-grams.jpg'}`} height={500} />
                  </div>
                  <div className="d-none text-white align-self-center">
                    <h4>Silver Silverback</h4>
                    <h5>BNB {nft && nft.gasFee ? nft.gasFee.toString().substring(1, nft.gasFee.toString().length) : ''}</h5>
                    <ClaimButton />
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
