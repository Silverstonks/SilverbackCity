/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { APIURL } from "../../config/constants";
import actions from '../actions'

const setModal = () => (dispatch, getState) => {
  dispatch(actions.authActions.getWalletAddress());

  let modalStep = 1;
  let modalShow = true;
  if (getState().auth.isAuthenticated) modalStep = 3;
  if (getState().auth.walletAuthenticated && modalStep === 3) modalShow = false;

  if (modalStep === 3 && !modalShow) {
    dispatch(actions.blockChainActions.getUserDetails());
  } else {
    dispatch({ type: 'SET_MODAL', payload: { modalStep, modalShow } });
  }
};

const updateModalState = (show) => (dispatch) => {
  dispatch({ type: 'UPDATE_MODAL_STATE', payload: show });
};

const updateModalStep = (step) => (dispatch) => {
  dispatch({ type: 'UPDATE_MODAL_STEP', payload: step });
};

const getUserRankings = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${APIURL}/rankings`);

    console.log('****** Inside applicationActions.js:getUserRankings() - data = ' + JSON.stringify(data));

    dispatch({ type: 'USER_RANKINGS', payload: data });
  } catch (e) {
    console.log('e', e);
  }
};

const setLoading = (loading) => (dispatch) => {
  dispatch({ type: 'SET_LOADING', payload: loading });
};

const setError = (error) => (dispatch) => {
  dispatch({ type: 'SET_ERROR', payload: error });
};

const removeError = () => (dispatch) => {
  dispatch({ type: 'REMOVE_ERROR' });
};

const subscribeNewsletter =  (email) => async (dispatch) => {
  try {
    // eslint-disable-next-line no-unused-vars
    const { data } = await axios.post(`${APIURL}/subscribe-newletter`, {email});

    dispatch({ type: 'SUBSCRIBE_NEWSLETTER', payload: email });
  }catch(e) {    
    dispatch({ type: 'SUBSCRIBE_NEWSLETTER_ERROR', payload: email });
    console.log('e', e);
  }
};

export default {
  updateModalState,
  updateModalStep,
  getUserRankings,
  setModal,
  setLoading,
  setError,
  removeError,
  subscribeNewsletter
};
