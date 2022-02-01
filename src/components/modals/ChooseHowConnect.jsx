import { useDispatch } from 'react-redux';
import actions from '../../store/actions';
import MetaMaskLogo from '../../static/images/metamask.svg';
import WalletConnectLogo from '../../static/images/walletconnect.svg';

const ChooseHowConnect = () => {
  const dispatch = useDispatch();

  const onClickMetamask = () => {
    // if (!window.ethereum) {
    dispatch(actions.blockChainActions.connectToMetaMask);
    // } else {
    //   dispatch(actions.applicationActions.updateModalStep(3));
    // }
  };

  const onClickWalletConnect = () => {
    /**
     * Implement code for wallet connect
     */
    alert('walletConnect');
  };

  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Connect Your Wallet</h5>
        <button type="button" className="close" onClick={() => dispatch(actions.applicationActions.updateModalState(false))}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <div className="row">
          <div className="col-12 d-flex justify-content-around my-3 py-2">
            <div className="text-center blockchain-connect" onClick={() => onClickMetamask()}>
              <img src={MetaMaskLogo} alt="MetaMask" height={50} ></img>
              <p className="pt-2">MetaMask</p>
            </div>
            <div className="text-center blockchain-connect" onClick={() => onClickWalletConnect()}>
              <img src={WalletConnectLogo} alt="WalletConnect" height={50} ></img>
              <p className="pt-2">WalletConnect</p>
            </div>
          </div>
        </div>
      </div>
      {/*<div className="modal-footer">
        <button type="button" className="btn btn-success" onClick={onclickUnderstood}>
          Understood
        </button>
      </div>*/}
    </div>
  );
};

export default ChooseHowConnect;
