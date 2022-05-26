import { BSSCAN_URL, BSSCAN_API_KEY } from '../../config/constants';
import axios from 'axios';

const getNftTransactions = (nftContractAddress) => async (dispatch, getState) => {
  const { nft } = getState().nft;
  const { isAuthenticated, walletAddress } = getState().auth;
  const nftTokenAddress = '0x9f5f6b5bf9d7781c482f22dc0a6ffa615c942f0c';

  try {
    /* TODO set no authenticated */
    if (!isAuthenticated && nft) {
      const { data } = await axios.get(
        `${BSSCAN_URL}api?module=account&action=tokennfttx` +
          `&contractaddress=${nftTokenAddress}` +
          `${walletAddress ?? ''}` + // &address=0xcd4ee0a77e09afa8d5a6518f7cf8539bef684e6c
          '&page=1' +
          '&offset=10' +
          '&startblock=0' +
          '&endblock=999999999' +
          '&sort=desc' +
          `&apikey=${BSSCAN_API_KEY}`
      );

      if (data?.message === 'OK') {
        const transactions = data?.result;
        //TODO active in PRODUCTION
        //if (transactions.some((transaction) => transaction.to === walletAddress)) {
        const transactionShowed = transactions.find((transaction) => transaction.to === walletAddress && nft.blockHash) ?? {};
        if (transactionShowed) {
          dispatch({
            type: 'LOAD_NFT',
            payload: { ...nft, ...transactionShowed },
          });
        }

        if (data?.result?.length > 1) {
          dispatch({
            type: 'SET_USER_NFT_TRANSACTIONS',
            payload: data.result,
          });
        }
        // }
      }

      return data;
    }
  } catch (err) {
    console.error('ERRORO', err);
  }
};

const bsscanActions = {
  getNftTransactions,
};

export default bsscanActions;
