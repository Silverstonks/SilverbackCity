import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import {
  LOAD_WALLET_ADDRESS,
  LOAD_TOTAL_SUPPLY,
  WRONG_NETWORK
} from "../types";
import actions from ".";
import Web3 from "web3";
const { ethereum } = window;
const rpcurl = process.env.REACT_APP_RPC_URL;
const address = process.env.REACT_APP_NFT_Address;
const abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256"
      }
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "CURRENT_PRICE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
let web3 = new Web3(rpcurl);
let methods = new web3.eth.Contract(abi, address).methods;
let connector;
let isMetaMask = false;

const connectTowalletConnect = async (dispatch) => {
  connector = new WalletConnect({
    bridge: "https://bridge.walletconnect.org", // Required
    qrcodeModal: QRCodeModal
  });
  if (!connector.connected) {
    // create new session
    connector.createSession();
  }

  connector.on("connect", (error, payload) => {
    if (error) {
      throw error;
    } else if (
      payload.params.length > 0 &&
      payload.params[0].accounts.length > 0
    ) {
      dispatch(actions.applicationActions.updateModalState(false));
      dispatch({
        type: LOAD_WALLET_ADDRESS,
        payload: {
          walletAddress: payload.params[0].accounts[0],
          isConnected: true
        }
      });
    }
    //console.log(payload);
  });
};

const changeNetwork = () => async (dispatch) => {
  try {
    await web3.currentProvider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: Web3.utils.toHex(process.env.REACT_APP_CHAIN_ID) }]
    });
  } catch (err) {
    //addNetwork(dispatch);
  }
};

const connectToMetaMask = async (dispatch) => {
  if (ethereum) {
    await ethereum.request({ method: "eth_requestAccounts" }).then(
      async (response) => {
        dispatch(actions.applicationActions.updateModalState(false));
        await ethereum.enable();
        isMetaMask = true;
        dispatch({
          type: LOAD_WALLET_ADDRESS,
          payload: { walletAddress: response[0], isConnected: true }
        });
        web3 = new Web3(ethereum);
        const chainId = await web3.eth.getChainId();
        console.log(chainId);
        if (Number(chainId) !== Number(process.env.REACT_APP_CHAIN_ID)) {
          dispatch({
            type: WRONG_NETWORK,
            payload: { isWrongNetwork: true }
          });
        } else {
          dispatch(loadProvider);
        }
      },
      (error) => {
        //Error Message
      }
    );
  } else {
    //Error Message to install metamask
    return false;
  }
};

const networkChanged = async (dispatch) => {
  debugger;
  web3 = new Web3(ethereum);
  const chainId = await web3.eth.getChainId();
  if (Number(chainId) !== Number(process.env.REACT_APP_CHAIN_ID)) {
    dispatch({
      type: WRONG_NETWORK,
      payload: { isWrongNetwork: true }
    });
  } else {
    dispatch({
      type: WRONG_NETWORK,
      payload: { isWrongNetwork: false }
    });
    dispatch(loadProvider);
  }
};

const loadProvider = async () => {
  await ethereum.enable();
  web3 = new Web3(ethereum);
  methods = new web3.eth.Contract(abi, address).methods;
};

const mint = async (dispatch, getState) => {
  const currentPrice = await price();
  const { walletAddress, amount } = getState().blockChain;
  debugger;
  if (isMetaMask) {
    await methods
      .mint(amount)
      .send({ from: walletAddress, value: currentPrice * amount })
      .on("transactionHash", (transactionHash) => {
        waitTillTransactionCompleted(transactionHash, dispatch);
      });
  } else {
    const data = methods.mint(amount).encodeABI();
    const tx = {
      from: walletAddress,
      to: address,
      data,
      value: currentPrice * amount
    };
    connector.sendTransaction(tx).then(async (transactionHash) => {
      await waitTillTransactionCompleted(transactionHash);
    });
  }
};

const totalSupply = async (dispatch, getState) => {
  let supplyWeb3 = new Web3(rpcurl);
  let totalSupply = await new supplyWeb3.eth.Contract(abi, address).methods
    .totalSupply()
    .call();
  debugger;
  dispatch({ type: LOAD_TOTAL_SUPPLY, payload: { totalSupply } });
};

const price = () => {
  let supplyWeb3 = new Web3(rpcurl);
  return new supplyWeb3.eth.Contract(abi, address).methods
    .CURRENT_PRICE()
    .call();
};

const waitTillTransactionCompleted = async (transactionHash, dispatch) => {
  const web3 = new Web3(rpcurl);
  let transactionReceipt = await web3.eth.getTransactionReceipt(
    transactionHash
  );

  // Even After Blockchain Accept the transaction, There is chance of having transaction is in pending state. ie Smart Contract is not updated yet.
  // We are waiting until transaction is accepted and Smart contract is updated
  // more on https://web3js.readthedocs.io/en/v1.2.11/web3-eth.html#gettransactionreceipt

  while (!transactionReceipt) {
    await sleep(1000);
    transactionReceipt = await web3.eth.getTransactionReceipt(transactionHash);
  }
  dispatch(totalSupply);
};

const blockChainActions = {
  connectToMetaMask,
  connectTowalletConnect,
  mint,
  totalSupply,
  changeNetwork,
  networkChanged,
  price
};

export default blockChainActions;
