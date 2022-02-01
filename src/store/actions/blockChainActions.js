import { UNIT_LEVEL } from '../../config/constants';
import WalletConnect from '@walletconnect/client';
import QRCodeModal from '@walletconnect/qrcode-modal';
import actions from '.';
import Web3 from 'web3';
const chainAddress = '0x4';
const { ethereum } = window;
const rpcurl = 'wss://speedy-nodes-nyc.moralis.io/ce642b35612b54570a97c664/bsc/mainnet/ws';
const remoteweb3 = new Web3(rpcurl);
let connector;

const connectwallet = async () => {
  this.connector = new WalletConnect({
    bridge: 'https://bridge.walletconnect.org', // Required
    qrcodeModal: QRCodeModal,
  });
  if (!this.connector.connected) {
    // create new session
    this.connector.createSession();
  }

  this.connector.on('connect', (error, payload) => {
    if (error) {
      throw error;
    }

    console.log(payload);
  });
};

const getChainId = async (userAddress) => {
  ethereum.request({ method: 'eth_chainId' }).then((response) => {
    console.log(response);
    if (response === chainAddress) {
      //Todo Connected to right network
    } else {
      if (userAddress.length > 0) {
        //Todo  Message for Wrong Password
      }
    }
  });
};

const connectToMetaMask = async () => {
  debugger;
  if (ethereum) {
    await ethereum.request({ method: 'eth_requestAccounts' }).then(
      (response) => {
        getChainId(response);
      },
      (error) => {
        //Error Message
      }
    );
  } else {
    //Error Message to install metamask
    return false;
  }
};

/**
 * 1. Request UserDetails from blockchain
 * 1.1 Avaible NFT from userWallet
 *     - Array<String> : UUID
 *
 *
 * @returns All userData
 */
const getUserNfts = () => async (dispatch, getState) => {
  const { isAuthenticated, walletAddress } = getState().auth;
  const { nftContract } = getState().blockChain || {};

  /* This is an example of a response of the method to get  */
  dispatch({
    type: 'SET_USER_NFTS',
    payload: [
      { selected: false, id: 1, sku: 'B9992100104', claimed: true },
      { selected: false, id: 2, sku: 'B9992100105', claimed: false },
      { selected: false, id: 3, sku: 'B9992100104', claimed: false },
      { selected: false, id: 4, sku: 'USC92501551S', claimed: false },
    ],
  });

  dispatch(actions.nftActions.getNfts());

  if (isAuthenticated && walletAddress) {
    try {
      const userDetails = await nftContract.methods.getUserDetails(walletAddress).call();

      console.log('**** (blockChainActions-getUserDetails)- USER DETAILS', userDetails);
      /* const totalStaked =
        userDetails && userDetails["0"] && userDetails["0"] / UNIT_LEVEL;


      console.log('**** totalStaked for Address ' + walletAddress + ' is: ' + totalStaked);

      const totalClaimed =
        userDetails && userDetails["7"] && userDetails["7"] / UNIT_LEVEL;
        
      // Getting Total Earned Information
      // Get Next Claimable Reward And Time
      let totalRewards  = "";
      let nextClaimableReward;
      let nextRewardDate = "";
      try {
        totalRewards = await nftContract.methods
          .getTotalRewards(walletAddress)
          .call();
        nextClaimableReward = await nftContract.methods
          .getNextClaimableReward(walletAddress)
          .call();
        nextRewardDate = await nftContract.methods
        .nextClaimableDate(walletAddress)
        .call();
      }catch (err) {
        console.info("Previos request error is controled");
      }
      

      console.log("totalRewards = " + totalRewards);
      const userData = {
        totalStaked: totalStaked && parseFloat(totalStaked).toFixed(7),
        totalClaimed: totalClaimed && parseFloat(totalClaimed).toFixed(7),
        totalRewards: totalRewards && parseFloat(totalRewards).toFixed(7),
        nextClaimableReward: nextClaimableReward && parseFloat(nextClaimableReward).toFixed(7),
        nextRewardDate: nextRewardDate && new Date(nextRewardDate),
        walletAddress: walletAddress,
      };
      console.log("**** blockChainActions.getUserDetails() - user data = " + JSON.stringify(userData))

      dispatch({
        type: "SET_USER_DETAILS",
        payload: { nft, walletAddress },
      });

      return data;*/
    } catch (err) {
      console.error('ERRORO', err);
    }
  }
};

const claimNfts = () => (dispatch, getState) => {
  const { isAuthenticated, walletAddress } = getState().auth;
  const { blockChainContract } = getState().blockChain;
  const { nfts } = getState().nft;

  if (isAuthenticated && walletAddress) {
    const selectedNfts = nfts.filter((nft) => nft.selected && !nft.claimed);
    //TODO claim userNft
  }
};

const blockChainActions = {
  getUserNfts,
  claimNfts,
  connectToMetaMask,
};

export default blockChainActions;
