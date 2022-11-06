import { useDispatch } from "react-redux";
import actions from "../../store/actions";
import MetaMaskLogo from "../../static/images/metamask.svg";
import WalletConnectLogo from "../../static/images/walletconnect.svg";
// import "../../static/scss/component/_connect_wallet.scss";
import { useRef } from "react";
// import useOnClickOutside from "../../hooks/useOnClickOutside";

const ChooseHowConnect = () => {
	const dispatch = useDispatch();
	const connectModal = useRef(null);

	// useOnClickOutside(connectModal, () =>
	//   dispatch(actions.applicationActions.updateModalState(false))
	// );

	const onClickMetamask = () => {
		if (!window.ethereum) {
			if (
				/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)
			) {
				window.open("https://metamask.app.link/dapp/" + window.location.host);
			} else dispatch(actions.applicationActions.updateModalStep(5));
		} else {
			dispatch(actions.blockChainActions.connectToMetaMask);
		}
	};

	const onClickWalletConnect = () => {
		dispatch(actions.blockChainActions.connectTowalletConnect);
	};

	return (
		<div ref={connectModal} className="connect-to-wallet">
			<div className="modal-body">
				<div className="row">
					<div className="col-12 d-flex justify-content-around my-2 py-2">
						<div
							className="text-center blockchain-connect "
							onClick={() => onClickMetamask()}
						>
							<img
								className="wallet-logo"
								src={MetaMaskLogo}
								alt="MetaMask"
								height={80}
							></img>
							<p className="pt-2">MetaMask</p>
						</div>
						<div
							className="text-center blockchain-connect"
							onClick={() => onClickWalletConnect()}
						>
							<img
								className="wallet-logo"
								src={WalletConnectLogo}
								alt="WalletConnect"
								height={80}
							></img>
							<p className="pt-2">WalletConnect</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChooseHowConnect;
