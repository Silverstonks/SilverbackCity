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
import Jumbotron from './Jumbotron/Jumbotron';

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

      <Slider />

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
