import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';
import Benefits from './Benefits';
import Marketplace from './Marketplace';
import Sections from './Sections'
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
import NftLab from './NftLab';

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
       <ToastContainer /> 
       <ModalDialogs /> 
      <Jumbotron />

      <div className="container home-container">
        <Slider />

        <MetaverseStory />
        {/* TODO: poner NFT Lab aquí */}
        
        <ClansSlider />

        <MintCard />
        {/* TODO: NFT Benefits */}
        {/* TODO: El resto de la integración de Bea */}
      </div>

      <NftLab />
      <Benefits />
      <Sections />
      <Marketplace />
      <Footer />
    </>
  );
};

export default HomePage;
