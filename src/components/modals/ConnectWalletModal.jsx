import { useEffect } from "react";
import { useDispatch } from "react-redux";
import actions from "../../store/actions";
import Web3 from "web3";
import { toast } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";
import { APIURL, NFTABI, NFTADDRESS, TOKENABI, TOKENADDRESS } from "../../config/constants";


const ConnectWalletModal = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth).user;

    useEffect(() => {
        let web3Modal = null;
        let web3Provider = null;
        let web3Account = null;

        // Figure out how, why, and when to get this variable.
        // Harcode it for now.
        let walletAuthenticated = false;
        async function initWallet() {
            const Web3Modal = window.Web3Modal.default;

            const providerOptions = {
            };

            web3Modal = new Web3Modal({
                network: "mainnet",
                cacheProvider: false,
                providerOptions,
                disableInjectedProvider: false,
            });

        }

        // Function triggered by login/logout button
        // Has no use for now, but keep for reference
        // eslint-disable-next-line
        function connectWalletButtonClick() {
            walletAuthenticated ? disconnectWallet() : connectWallet();
        }

        async function connectWallet() {
            try {
                web3Provider = await web3Modal.connect();
            } catch (error) {
                console.info("Could not get a wallet connection", error);
                return;
            }

            // Subscribe to accounts change
            web3Provider.on("accountsChanged", (accounts) => {
                if (web3Account && accounts && accounts.length) refreshAccountData();
                else disconnectWallet();
            });

            // Subscribe to chainId change
            web3Provider.on("chainChanged", (chainId) => {
                fetchAccountData();
            });

            // Subscribe to networkId change
            web3Provider.on("networkChanged", (networkId) => {
                fetchAccountData();
            });

            // Disconnect
            web3Provider.on("disconnect", (data) => {
                disconnectWallet();
            });

            await refreshAccountData();
        }

        async function disconnectWallet() {
            // console.log("Killing the wallet connection", web3Modal);
            await web3Modal.clearCachedProvider();

            if (web3Modal && web3Modal.close) {
                await web3Modal.close();
            }
            web3Modal = null;
            web3Account = null;
            dispatch(actions.authActions.logOutUser());
        }

        async function fetchAccountData() {
            if (!web3Provider) return;

            try {
                await web3Provider.request({ method: 'eth_accounts' }).then(accounts => {
                    web3Account = accounts[0];

                    dispatch({
                        type: "LOAD_WALLET_ADDRESS",
                        payload: web3Account,
                    });

                    axios.get(`${APIURL}/getUserByWalletAddress/${web3Account}`)
                        .then(({ data }) => {
                            dispatch({
                                type: "LOAD_USER",
                                payload: {
                                    user: data.data[0],
                                    token: user.token,
                                },
                            });

                        });

                    const web3 = new Web3(web3Provider);

                    const tokenContract = new web3.eth.Contract(TOKENABI, TOKENADDRESS);

                    const nftContract = new web3.eth.Contract(NFTABI, NFTADDRESS);

                    var Web3 = require('web3');

                    dispatch({
                        type: "LOAD_BLOCKCHAIN",
                        payload: { web3, tokenContract, nftContract },
                    });

                    dispatch(actions.applicationActions.updateModalState(false));
                    dispatch(actions.blockChainActions.getUserNfts())
                    toast.success("You are now logged in!");
                }).catch(error => {
                    console.info(error);
                });

            } catch (error) {
                console.info(error);
                return;
            }
        }

        async function refreshAccountData() {
            await fetchAccountData();
            // loginOrRegister(); // THIS FUNCTION IS ONLY FOR SCANDEFI DATABASE LOGIN
        }

        function removeModalElement() {
            window.jQuery("#onboardModal").parent().hide();
            // document.querySelector?.remove();
        }

        initWallet();
        removeModalElement();
        // eslint-disable-next-line
    }, [dispatch]);

    return (<></>);
}

export default ConnectWalletModal;