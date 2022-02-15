import { combineReducers } from "redux";
import nftReducer from './nftReducer';
import applicationReducer from './applicationReducer';
import authReducer from './authReducer'
import nftTransactionReducer from './bsscanAPIReducer';

export default combineReducers({
  /*nft: nftReducer,
  auth: authReducer,*/
  application: applicationReducer,
 // nftTransactions: nftTransactionReducer
});