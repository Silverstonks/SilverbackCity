import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

const BlockChainInfo = () => {
  const { nft } = useSelector((state) => state.nft);
  const { nftTransaction, nftTransactions } = useSelector((state) => state.nftTransactions);

  /**
   * Los datos que queremos llamar nosotros son los siguientes: Transaction Hash, Block, Timestamp, Interacted With (To), Gas Limit, Gas Price
   *
   */

  console.log('nft', nft);
  console.log('nftTransaction', nftTransaction)
  console.log('nftTransactions', nftTransactions)

  return (
    <section className="tab product-info">
      <div className="container mb-3">
        <div className="row">
          <div className="col-12 d-flex justify-content-between">
            <span className="label px-3"> Transaction Hash: </span>
            <span className="data px-3">
              {nft?.hash ?? nftTransaction?.hash ?? nftTransactions?.length > 0 ? nftTransactions[0].hash : ''}
            </span>
          </div>
          <div className="col-12 d-flex justify-content-between">
            <span className="label px-3"> Block Hash: </span>
            <span className="data px-3">
              {nft?.blockHash ?? nftTransaction?.blockHash ?? nftTransactions?.length > 0 ? nftTransactions[0].blockHash : ''}
            </span>
          </div>
          <div className="col-lg-6 col-12 d-flex justify-content-between">
            <span className="label px-3"> Transaction time: </span>
            <span className="data px-3">
              {nft?.timeStamp > 0
                ? new Date(parseInt(nft.timeStamp, 10)).toLocaleTimeString()
                : nftTransaction?.timeStamp > 0
                ? new Date(parseInt(nftTransaction.timeStamp, 10)).toLocaleTimeString()
                : nftTransactions?.length > 0
                ? new Date(parseInt(nftTransactions[0].timeStamp, 10)).toLocaleTimeString()
                : ''}
            </span>
          </div>
          <div className="col-lg-6 col-12 d-flex justify-content-between">
            <span className="label px-3"> Transaction to: </span>
            <span className="data px-3">{nft.to ?? nftTransaction?.to ?? nftTransactions?.length > 0 ? nftTransactions[0].to : ''}</span>
          </div>
          <div className="col-lg-6 col-12 d-flex justify-content-between">
            <span className="label px-3"> Gas limit: </span>
            <span className="data px-3">{nft.gas ?? nftTransaction?.gas ?? nftTransactions?.length > 0 ? nftTransactions[0].gas : ''}</span>
          </div>
          <div className="col-lg-6 col-12 d-flex justify-content-between">
            <span className="label px-3"> Gas price: </span>
            <span className="data px-3">{nft.gasPrice ?? nftTransaction?.gasPrice ?? nftTransactions?.length > 0 ? nftTransactions[0].gasPrice : ''}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockChainInfo;
