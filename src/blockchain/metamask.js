import Web3 from 'web3';
const chainAddress = "0x4";
const { ethereum } = window;

const connectToMetaMask = async () => {
    if (ethereum) {
        await ethereum.request({ method: "eth_requestAccounts" }).then(
            (response) => {
            },
            (error) => {
            }
        );
    } else {
        return false;
    }
};

const checkWalletConnected = (e) => {
    if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        window.ethereum.enable();
        return true;
    }
    return false;
};

const getChainId = async (userAddress) => {
    ethereum.request({ method: "eth_chainId" }).then((response) => {
        console.log(response);
        if (response === chainAddress) {
        } else {
            if (userAddress.length > 0) {
            }
        }
    });
};

module.exports = {
    connectToMetaMask,
    checkWalletConnected,
    getChainId
}