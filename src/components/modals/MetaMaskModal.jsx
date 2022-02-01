import { useDispatch } from "react-redux";
import actions from "../../store/actions";

const MetaMaskModal = () => {
    const dispatch = useDispatch();

    return (
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                    Install MetaMask
                </h5>
                <button
                    type="button"
                    className="close"
                    onClick={() => dispatch(actions.applicationActions.updateModalState(false))}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <p>You need to download and install the MetaMask Browser Extension to start staking</p>

                <small>
                    Remember to refresh your browser after installing Metamask.
                </small>
            </div>
            <div className="modal-footer">
                <a className="btn btn-success" rel="noreferrer" href="https://metamask.io/download.html" target="_blank" >Download</a>
            </div>
        </div>);

}

export default MetaMaskModal;