import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';
import Header from './Header';
import BuySection from './static/BuySection';
import History from './static/History';
import Nft from './static/Nft';
import NftCertificate from './static/NftCertificate';
import Metaverse from './static/Metaverse';
import actions from '../store/actions';
import '../static/scss/main.scss';
import ModalDialogs from './ModalDialogs';
import NftTabs from './NftTabs';

const HomePage = () => {
  localStorage.clear();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(actions.applicationActions.setModal());
    dispatch(actions.nftActions.getNft(null, true));
    /* TODO remove this backdoor, this is called when u */
     dispatch(actions.blockChainActions.getUserNfts())
  }, [dispatch]);

  return (
    <>
      <Header />
      <ToastContainer />
      <ModalDialogs />
      {/* TODO set condition to user autenthicated:  isAuthenticated */}
      {!isAuthenticated && <NftTabs />  }
      <History />
      <Nft />
      <NftCertificate />
      <Metaverse />
      <BuySection />
      <Footer />
    </>
  );
};

export default HomePage;
