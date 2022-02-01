import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../store/actions';

const MyNfts = () => {
  const { nfts } = useSelector((state) => state.nft);
  const dispatch = useDispatch();

  return (
    <section className="tab my-nfts">
      <div className="container mb-3">
        <div className="row">
          {nfts.length < 1 && (
            <div className="col-12 d-flex justify-content-center">
              There are no <span className="data">&nbsp;NFTs&nbsp;</span> associated to your wallet
            </div>
          )}
          {nfts.length > 1 && (
            <div className="col-12 pb-3 pl-5 d-flex justify-content-between">
              <div>PRODUCT</div>
              <div>STATUS</div>
            </div>
          )}
          {nfts.length > 1 &&
            Object.values(nfts).map((nft, index) => {
              return (
                <div key={nft.id} className={`col-12 nft-item  py-2 pl-5  ${nft.claimed ? 'claimed' : ''}`}>
                  <label className="control control-checkbox form-check-label d-flex justify-content-between" htmlFor={nft.id}>
                    {nft.itemName}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={nft.selected}
                      id={nft.id}
                      onChange={() => dispatch(actions.nftActions.toogleSelectNft(nft.id))}
                      disabled={nft.claimed}
                    />
                    <div className="control_indicator"></div>
                    <span className={`data`}>{nft.claimed ? 'Claimed' : 'Unclaimed'}</span>
                  </label>
                  <button onClick={() => dispatch({ type: 'LOAD_NFT', payload: nft })} className="btn btn-outline-bgalpha btn-view">
                    Show
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default MyNfts;
