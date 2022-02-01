const initialState = {
    nftTransaction: {},
    nftTransactions: [],
  };
  
  export default function nftTransactionReducer(state = initialState, action) {
    switch (action.type) {
      case 'LOAD_NFT_TRANSACTION':
        return {
          ...state,
          nftTransaction: action.payload,
        };
      case 'LOGOUT_USER':
        return {
          ...state,
          ...initialState
        };
      case 'SET_USER_NFT_TRANSACTIONS':
        return {
          ...state,
          nftTransactions: action.payload,
        };
      default:
        return state;
    }
  }
  