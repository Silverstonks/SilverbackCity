import { LOAD_BLOCKCHAIN, BLOCKCHAIN_ERROR } from '../types'

const initialState = {
  blockChainLoaded: false,
  web3: null,
  nftContract: null,
  tokenContract: null,
  walletProvider: null,
}

export default function blockChainReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BLOCKCHAIN:
      return {
        ...state,
        blockChainLoaded: true,
        web3: action.payload.web3,
        nftContract: action.payload.nftContract,
        tokenContract: action.payload.tokenContract,
      };
    case "SET_WALLET_PROVIDER":
      return {
        ...state,
        walletProvider: action.payload.walletProvider,
      }
    case BLOCKCHAIN_ERROR:
      return {
        ...state,
        blockChainLoaded: false
      }
    case "SET_USER_DETAILS" :
    case "GET_USER_BLOCKCHAIN_NFT":
      return {
        ...state,
      }
    case "LOGOUT_USER_BLOCKCHAIN":
      return {
        ...state,
      }
    default:
      return state;
  }
}