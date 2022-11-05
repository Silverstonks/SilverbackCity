import { combineReducers } from "redux";
import nftReducer from "./nftReducer";
import applicationReducer from "./applicationReducer";
import authReducer from "./authReducer";
import nftTransactionReducer from "./bsscanAPIReducer";
import blockChainReducer from "./blockChainReducer";

export default combineReducers({
  /*nft: nftReducer,
  auth: authReducer,*/
  application: applicationReducer,
  // nftTransactions: nftTransactionReducer
  blockChain: blockChainReducer
});
