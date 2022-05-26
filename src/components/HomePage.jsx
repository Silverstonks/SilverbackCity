import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';
import Benefits from './Benefits';
import Marketplace from './Marketplace';
import Sections from './Sections';
import Header from './Header';
import actions from '../store/actions';
import '../static/scss/main.scss';
import ModalDialogs from './ModalDialogs';
import Slider from './Slider/Slider';
import ClansSlider from './ClansSlider/ClansSlider';
import Jumbotron from './Jumbotron/Jumbotron';
import './HomePage.scss';
import MetaverseStory from './MetaverseStory/MetaverseStory';
import MintCard from './MintCard/MintCard';
import NftLab from './NftLab';
import LinesDecoration from '../static/images/slider/LinesDecoration.png';
import Roadmap from './static/Roadmap';
import Team from './static/Team';

const HomePage = () => {
  localStorage.clear();
  const dispatch = useDispatch();

  useEffect(() => {
    /*dispatch(actions.applicationActions.setModal());*/
  }, [dispatch]);

  const isApple =
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    ((navigator?.userAgentData?.platform || navigator?.platform || 'unknown') === 'MacIntel' && navigator.maxTouchPoints > 1);

    console.error(!isApple);

  return (
    <>
      <Suspense fallback="loading">
        <Header />

        {/* <ToastContainer /> */}
        <ModalDialogs />

        <Jumbotron showCountDown={!isApple} />

        <div className="prueba-degradado">
          <div className="container">
            <Slider />
            <div className="d-flex justify-content-end mt-3">
              <img src={LinesDecoration} alt="" className="img-detail lines mr-5 mt-5" />
            </div>
            <MetaverseStory />
            <NftLab />
            <ClansSlider />
            <MintCard />

          </div>
        </div>
        <Marketplace />
        <Benefits />

        <Sections />

        {/* <Marketplace /> */}

        <Roadmap />

        <Team />

        <Footer />
      </Suspense>
    </>
  );
};

export default HomePage;
