/* eslint-disable import/no-anonymous-default-export */
import {
  LOAD_USER,
} from "../types";
import axios from "axios";
import actions from "../actions";
import validator from "validator";
import { APIURL } from "../../config/constants";


// Supports Login Modal for signing up a user (signUpUser)
const signUpUser = (emailRaw) => async (dispatch) => {
  const email = emailRaw.toLowerCase();
  dispatch(actions.applicationActions.removeError())
  try {
    if (!validator.isEmail(email)) {
      dispatch(actions.applicationActions.setError("Email Not Valid"));
      return;
    }
    const response = await axios.post(`${APIURL}/signup/` +  window.ethereum?.selectedAddress, {
      email
    });

    if (!response.data.success) {
      dispatch(actions.applicationActions.setError("Error sending email"));
      return;
    }

    dispatch(actions.applicationActions.updateModalStep(2));



  } catch (e) {
    dispatch(actions.applicationActions.setError(e.message));
  }
};

const verifyUser = (verificationCode, email) => async (dispatch) => {
  dispatch(actions.applicationActions.removeError())
  try {
    if (verificationCode.length !== 6) {
      dispatch(actions.applicationActions.setError("Should be 6 characters"))
      return;
    }
    const response = await axios.post(`${APIURL}/verify`, {
      verificationCode,
      email
    });

    if (!response.data.success) {
      dispatch(actions.applicationActions.setError("Invalid Token"))
      return;
    }

    dispatch({
      type: LOAD_USER,
      payload: { ...response.data, token: response.data.token },
    });
    
    dispatch(actions.applicationActions.updateModalStep(5));
  } catch (e) {

    dispatch(actions.applicationActions.setError(e.message));
  }
};


export const getWalletAddress = () => (dispatch, getState) => {
  const { walletAddress } = getState().auth;
  if (walletAddress) {
    dispatch({
      type: "LOAD_WALLET_ADDRESS",
      payload: walletAddress,
    });
  }
  else if (window.selectedAddress) {
    dispatch({
      type: "LOAD_WALLET_ADDRESS",
      payload: window.selectedAddress,
    });
  }
  else if (window.ethereum && window.ethereum.selectedAddress) {
    dispatch({
      type: "LOAD_WALLET_ADDRESS",
      payload: window.ethereum.selectedAddress,
    });
  }
  else {
    dispatch({
      type: "LOAD_WALLET_ADDRESS_ERROR"
    });
  }
};

const logOutUser = () => (dispatch) => {
  dispatch({
    type: "LOGOUT_USER",
    payload: {
      user: null,
      account: ""
    }
  });
  dispatch({
    type: "LOGOUT_USER_BLOCKCHAIN"
  });
  window.location.reload();
};

const updateUserById = (userData) => async (dispatch, getState) => {
  const user = getState().auth.user;
  const id = user && user.user && user.user._id;
  console.log("***** inside authActions.updateUserById (FRONTEND) userData = ", userData)
  console.log("***** inside authActions.updateUserById (FRONTEND) USER ID =", id)

  if (user && user.token) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`
      }
    };
    let body = {
      userData: userData,
      config: config
    }
    console.log("***** inside updateUserById (" + userData.totalStaked + ") (FRONTEND) BODY =", body)

    const { data } = await axios.patch(
      APIURL + '/updateUserById/' + id,
      body,
      { new: true },
    );
    console.log("(Inside updateUserById (frontend) - DATA = ", data);
    const updatedUser = {
      token: user.token,
      user: data && data.data,
    };

    dispatch({
      type: LOAD_USER,
      payload: updatedUser,
    });

    return data;
  } else {
    return false;
  }
};

const updateUserByWallet = (walletAddress, totalStaked) => async (dispatch, getState) => {
  const user = getState().auth.user;
  console.log("***** inside authActions.updateUserByWallet (FRONTEND) totalStaked = ", totalStaked)
  console.log("***** inside authActions.updateUserByWallet (FRONTEND) user = ", user)
  console.log("***** inside authActions.updateUserByWallet (FRONTEND) user.token = ", user.token)

  if (user && user.token) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`
      }
    };


    // Persis the wallet authorization across logins.
    const { data } = await axios.patch(APIURL + '/updateUserByWallet/' + walletAddress + '/' + totalStaked);

    console.log(">>> Updating " + walletAddress + " total staked to " + totalStaked);

    const updatedUser = {
      token: user.token,
      user: data.data,
      config: config
    };

    dispatch({
      type: LOAD_USER,
      payload: updatedUser,
    });

    return data;
  } else {
    return false;
  }
};

const updateWalletAuthorization = (walletAddress) => async (dispatch, getState) => {
  console.log("***** inside updateWalletAuthorization (FRONTEND) walletAddress =", walletAddress)
  const user = getState().auth.user;
  console.log('***** authActions.updateWalletAuthorization - user = ' + JSON.stringify(user));

  axios.patch(APIURL + '/updateWalletAuthorization/' + walletAddress, {
    new: true
  }).then((response) => {
    const updatedUser = {
      token: user.token,
      user: response.data,
    }

    dispatch({
      type: LOAD_USER,
      payload: updatedUser,
    });
  });
}

export default {
  signUpUser,
  verifyUser,
  getWalletAddress,
  logOutUser,
  updateUserById,
  updateUserByWallet,
  updateWalletAuthorization
};