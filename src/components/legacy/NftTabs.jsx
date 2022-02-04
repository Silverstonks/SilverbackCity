import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import logoProductInfo from '../static/images/icon-ingot.png';
import bockChainInfo from '../static/images/icon-blockchain.png';
import myNft from '../static/images/my-nft.png';
import ProductInfo from '../tabs/ProductInfo';
import BlockChainInfo from '../tabs/BlockchainInfo';
import MyNfts from '../tabs/MyNfts';

const NftTabs = () => {
  const { walletAddress } = useSelector((state) => state.auth);
  const { nft } = useSelector((state) => state.nft);

  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <section className="nft-tabs">
        <div className="tabs">
          <div className="tab-list">
            <div className="d-flex justify-content-center">
              <div className={`mx-2 d-flex justify-content-center align-items-center px-3 tab-header ${activeTab === 0 ? 'active-tab' : ''}`} onClick={() => setActiveTab(0)}>
                <img className="m-2" alt="PRODUCT INFO" src={logoProductInfo} height={60}></img>
                PRODUCT INFO
              </div>
              <div className={`mx-2 d-flex justify-content-center align-items-center px-3 tab-header  ${activeTab === 1 ? 'active-tab' : ''}`} onClick={() => setActiveTab(1)}>
                <img className="m-2" alt="BLOCKCHAIN INFO" src={bockChainInfo} height={60}></img>
                BLOCKCHAIN INFO
              </div>
              <div className={`mx-2 d-flex justify-content-center align-items-center px-3 tab-header  ${activeTab === 2 ? 'active-tab' : ''}`} onClick={() => setActiveTab(2)}>
                <img className="m-2" alt="BLOCKCHAIN INFO" src={myNft} height={60}></img>
                MY CERTIFICATES
              </div>
            </div>
          </div>
          <div className="tab-content">
            <div className="py-4">
              {activeTab === 0 && <ProductInfo />}
              {activeTab === 1 && <BlockChainInfo />}
              {activeTab === 2 && <MyNfts />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NftTabs;
