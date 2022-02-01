import React, { useEffect, useState } from 'react';
import { SiTiktok } from 'react-icons/si';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../store/actions';
import LogoDark from '../static/images/logo-dark.svg';
import { toast } from 'react-toastify';

const Footer = () => {
  const dispatch = useDispatch();
  const [loadingNewsletter, setloadingNewsletter] = useState(false);
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
  };

  return (
    <footer>
      <div className="container-fluid py-5 ">
        <div className="container-xl">
          <div className="row mb-4">
            <div className="col-12">
              <p className="fs-16 txt-color-dark-2">
                <i className="fas fa-flag mr-4"></i>
                US English
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-xl-7">
              <div className="row">
                <div className="col mb-md-0 mb-5 text-nowrap">
                  <span className="fs-16 fw-700 txt-color-mint text-uppercase d-table mb-3">INFO</span>

                  <p className="fs-16 light-color">SILVER STONKS, INC</p>

                  <p className="fs-16 light-color">hello@silverstonks.io</p>
                </div>

                <div className="col mb-md-0 mb-5">
                  <span className="fs-16 fw-700 txt-color-mint text-uppercase d-table mb-3">COMPANY</span>
                  <a href="https://silverstonks.io/about.html" className="fs-16 mb-3 d-table">
                    About
                  </a>
                  <a href="https://silverstonks.io/why.html" className="fs-16 mb-3 d-table">
                    Why
                  </a>
                  <a href="https://silverstonks.io/social.html" className="fs-16 mb-3 d-table">
                    Social
                  </a>
                  <a href="https://silverstonks.io/contact-us.html" className="fs-16 mb-3 d-table">
                    Contact Us
                  </a>
                </div>
                <div className="col mb-md-0 mb-5">
                  <span className="fs-16 fw-700 txt-color-mint text-uppercase d-table mb-3">PRODUCTS</span>

                  <a href="https://staking.silverstonkstoken.com/" className="fs-16 mb-3 d-table">
                    Staking
                  </a>
                  <a href="https://silverstonks.io/#" className="fs-16 mb-3 d-table">
                    Shop
                  </a>
                  <a href="https://silverstonks.io/token-sstx.html" className="fs-16 mb-3 d-table">
                    Token
                  </a>
                  <a href="https://staking.silverstonkstoken.com/" className="fs-16 mb-3 d-table">
                    Memberships
                  </a>
                </div>
                <div className="col mb-md-0 mb-5">
                  <span className="fs-16 fw-700 txt-color-mint text-uppercase d-table mb-3">LEARN</span>
                  <a href="https://silverstonks.io/learn-user-guide.html" className="fs-16 mb-3 d-table">
                    User Guide
                  </a>
                  <a href="https://silverstonks.io/learn-faq.html" className="fs-16 mb-3 d-table">
                    FAQ’s
                  </a>
                  <a href="https://silverstonks.io/#" className="fs-16 mb-3 d-table">
                    Blog
                  </a>
                  <a
                    href="https://silverstonks.io/assets/files/White-Paper-Silver-Stonks-EN-3.pdf"
                    rel="noreferrer"
                    target="_blank"
                    className="fs-16 mb-3 d-table"
                  >
                    White Paper
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-xl-5">
              <span className="fs-16 fw-700 txt-color-mint text-uppercase d-table mb-4">SUBSCRIBE TO OUR NEWSLETTER</span>
              <form className="c-form-email-capture--bottom">
                <div className="form-row">
                  <div className="col-12">
                    <label className="form-label small-label">Follow our newsletter to stay updated about the latest news.</label>
                  </div>
                  <div className="col-sm-8 mb-3 mb-md-0 d-flex">
                    <input
                      type="text"
                      className="form-control h-100 w-100"
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Email"
                      name="email"
                    ></input>
                  </div>

                  <div className="col-sm-4 mb-3 mb-md-0 ">
                    
                    <button className="btn btn-outline-cta" type="button" onClick={onClickNewsletter}>
                      {loadingNewsletter ? /*TODO añadir spinner */ 'loading' : 'SUBMIT'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="row pt-4 mt-4 border-top-mint-1">
            <div className="col-md-6 mb-md-0 mb-4 d-flex align-items-center justify-content-center justify-content-md-start">
              <a href="https://silverstonks.io/">
                <img src={LogoDark} alt=""></img>
              </a>
            </div>

            <div className="col-md-6 mb-md-0 mb-4 d-flex align-items-center justify-content-center justify-content-md-end">
              <a href="https://www.twitch.tv/silverstonksofficial" target="_blank" rel="noreferrer" className="mr-3">
                <i className="fab fa-twitch fa-lg"></i>
              </a>
              <a href="https://www.facebook.com/silverstonks/" target="_blank" rel="noreferrer" className="mr-3">
                <i className="fab fa-facebook-f fa-lg"></i>
              </a>
              <a href="https://twitter.com/SilverStonks" target="_blank" rel="noreferrer" className="mr-3">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="https://www.youtube.com/c/SilverStonks" target="_blank" rel="noreferrer" className="mr-3">
                <i className="fab fa-youtube fa-lg"></i>
              </a>
              <a href="https://www.linkedin.com/company/silverstonks/" target="_blank" rel="noreferrer" className="mr-3">
                <i className="fab fa-linkedin-in fa-lg"></i>
              </a>
              <a href="https://www.instagram.com/silverstonkers/" target="_blank" rel="noreferrer" className="mr-3">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="https://www.reddit.com/r/SilverStonks/" target="_blank" rel="noreferrer" className="mr-3">
                <i className="fab fa-reddit-alien fa-lg"></i>
              </a>
              <a href="https://www.tiktok.com/@silverstonks" target="_blank" rel="noreferrer" className="mr-3 pb-1">
                <SiTiktok id="tiktok" className="text-dark" style={{ cursor: 'pointer' }} />
              </a>
              <a href="https://t.me/SilverStonksEN" target="_blank" rel="noreferrer" className="mr-3">
                <i className="fab fa-telegram-plane fa-lg"></i>
              </a>
              <a href="https://discord.gg/6q9hQcmYq5" target="_blank" rel="noreferrer" className="mr-3">
                <i className="fab fa-discord fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-color-black">
        <div className="container-xl py-4">
          <div className="row justify-content-between">
            <div className="col-md-4 txt-color-white text-center text-md-left">© 2021 Silver Stonks. All Rights Reserved.</div>
            <div className="col-md-4 text-center txt-color-white">
              <a href="https://silverstonks.io/privacy.html" className="txt-color-white ">
                Privacy Policy
              </a>
              <span className="px-3">|</span>
              <a href="https://silverstonks.io/terms.html" className="txt-color-white ">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
