import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';
import Header from './Header';
import actions from '../store/actions';
import '../static/scss/main.scss';
import ModalDialogs from './ModalDialogs';
import Slider from './Slider/Slider';
import ClansSlider from './ClansSlider/ClansSlider'
import Jumbotron from './Jumbotron/Jumbotron';
import './HomePage.scss';
import MetaverseStory from './MetaverseStory/MetaverseStory';
import MintCard from './MintCard/MintCard';

const HomePage = () => {
  localStorage.clear();
  /*const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(actions.applicationActions.setModal());
  }, [dispatch]);*/

  return (
    <>
      <Header />
      {/* <ToastContainer /> */}
      {/* <ModalDialogs /> */}
      <Jumbotron />

      <div className="container">
        <Slider />

        <MetaverseStory />

        <MintCard />

        <ClansSlider />
      </div>

      {/*<History />
      <Nft />
      <NftCertificate />
      <Metaverse />
      <BuySection />*/}
      <Footer />
    </>
  );
};

export default HomePage;
