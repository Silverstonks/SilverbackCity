/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { APIURL } from '../../config/constants';
import bsscanActions from './bsscanAPIActions';

/**
 * Request NFT to show in Header.jsx
 * Conditions:
 *          1. argument
 *          2. Url RequestParam nft
 *          3. Default DDBB Nft
 *
 * @returns
 */
const getNft = (sku, showInBanner) => async (dispatch, getState) => {
  try {
    const {
      data: { data },
    } = await axios.get(`${APIURL}/nft`, { params: { nftSku: sku ?? null } });
    console.log('****** Inside nftActions.js:getNft() - data = ' + JSON.stringify(data));

    const { nfts } = getState().nft || [];

    if (sku && nfts.some((nft) => nft.sku === sku)) {
      dispatch({ type: 'SET_USER_NFTS', payload: nfts.map((nft) => (nft.sku === sku ? { ...nft, ...data } : nft)) });
    }

    if (showInBanner) {
      dispatch({
        type: 'LOAD_NFT',
        payload: nfts.some((nft) => nft.sku === data.sku) ? { ...nfts.find((nft) => nft.sku === data.sku), ...data } : data,
      });
    }

    //TODO the should be called with nft main contrat
    dispatch(bsscanActions.getNftTransactions(null));
  } catch (err) {
    console.error('ERROR LOADING NFT', err);
  }
};

const toogleSelectNft = (nftId) => (dispatch, getState) => {
  dispatch({ type: 'TOOGLE_NFT', payload: nftId });
};

const getNfts = () => async (dispatch, getState) => {
  const { nfts } = getState().nft;
  if (nfts?.length > 0) {
    nfts.forEach((nft, index) => dispatch(getNft(nft.sku, index === 0)));
  }
};

const nftActions = {
  getNft,
  getNfts,
  toogleSelectNft,
};

export default nftActions;
