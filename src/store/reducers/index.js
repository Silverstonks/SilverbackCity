import { combineReducers } from "redux";
import nftReducer from './nftReducer';
import applicationReducer from './applicationReducer';
import authReducer from './authReducer'
import nftTransactionReducer from './bsscanAPIReducer';

export default combineReducers({
  nft: nftReducer,
  application: applicationReducer,
  auth: authReducer,
  nftTransactions: nftTransactionReducer
});