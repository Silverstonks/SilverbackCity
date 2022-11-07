import {
  LOAD_BLOCKCHAIN,
  BLOCKCHAIN_ERROR,
  LOAD_WALLET_ADDRESS,
  LOAD_TOTAL_SUPPLY,
  WRONG_NETWORK,
  CHANGE_AMOUNT
} from "../types";

const initialState = {
  blockChainLoaded: false,
  web3: null,
  nftContract: null,
  tokenContract: null,
  walletProvider: null,
  isConnected: false,
  nftContractMethods: null,
  walletAddress: "",
  totalSupply: 0,
  isWrongNetwork: false,
  amount: 1
};

export default function blockChainReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BLOCKCHAIN:
      return {
        ...state,
        blockChainLoaded: true,
        web3: action.payload.web3,
        nftContract: action.payload.nftContract,
        tokenContract: action.payload.tokenContract
      };
    case "SET_WALLET_PROVIDER":
      return {
        ...state,
        walletProvider: action.payload.walletProvider
      };
    case BLOCKCHAIN_ERROR:
      return {
        ...state,
        blockChainLoaded: false
      };
    case LOAD_TOTAL_SUPPLY:
      return {
        ...state,
        totalSupply: action.payload.totalSupply
      };
    case WRONG_NETWORK:
      return { ...state, isWrongNetwork: action.payload.isWrongNetwork };

    case CHANGE_AMOUNT:
      return { ...state, amount: action.payload.amount };

    case LOAD_WALLET_ADDRESS:
      return {
        ...state,
        walletAddress: action.payload.walletAddress,
        isConnected: action.payload.isConnected
      };
    case "SET_USER_DETAILS":
    case "GET_USER_BLOCKCHAIN_NFT":
      return {
        ...state
      };
    case "LOGOUT_USER_BLOCKCHAIN":
      return {
        ...state
      };
    default:
      return state;
  }
}
