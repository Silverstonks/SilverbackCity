import { LOAD_USER, LOAD_USER_ERROR } from "../types";

const initialState = {
  isAuthenticated: false,
  user: {},
  walletAuthenticated: false,
  walletAddress: null,
  walletAuthorized: false,
};

export default function authReducer (state = initialState, action) {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        walletAuthorized: action.payload && action.payload.user && action.payload.user.walletAuthorized
      };
    case LOAD_USER_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        user: {}
      };
    case "LOAD_WALLET_ADDRESS":
      return {
        ...state,
        walletAddress: action.payload,
        walletAuthenticated: true
      }
    case "LOAD_WALLET_ADDRESS_ERROR":
      return {
        ...state,
        walletAddress: null,
        walletAuthenticated: false
      }
    case "LOGOUT_USER":
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        walletAuthenticated: false,
        walletAddress: null,
      }
    case "AUTHORIZE_WALLET":
      return {
        ...state,
        walletAuthorized: true,
      }
    default:
      return state;
  }
}