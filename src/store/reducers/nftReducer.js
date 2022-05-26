const initialState = {
  nft: {},
  nfts: [],
};

export default function nftReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_NFT':
      return {
        ...state,
        nft: action.payload,
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        nfts: [],
      };
    case 'CLAIM_NFT':
      return {
        ...state,
      };
    case 'SET_USER_NFTS':
      return {
        ...state,
        nfts: action.payload,
      };
    case 'TOOGLE_NFT': {
      return {
        ...state,
        nfts: state.nfts.map((nft) => {
          if (nft.id === action.payload && !nft.claimed) {
            nft.selected = !nft.selected;
          }
          return nft;
        }),
      };
    }
    default:
      return state;
  }
}
