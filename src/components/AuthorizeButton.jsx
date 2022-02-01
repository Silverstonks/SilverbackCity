import { formatWalletAddress } from '../utils';
import './AuthorizeButton.css';

const AuthorizeButton = ({ walletAuthorized, onClickAuthorizeBehavior, walletAddress }) => {
    const AuthorizedInfo = () => (
        <div className="leftdivauthorized">
            You have authorized wallet <span>{formatWalletAddress(walletAddress)}</span>.
        </div>
    );

    const UnauthorizedInfo = () => (
        <>
            <div className="col-xs-12 col-sm-8">
                Before staking, you need to authorize your wallet for allowing transactions.
            </div>
            <div className="col-xs-6 col-md-4">
                <button
                    className="btn btn-success"
                    onClick={async () => await onClickAuthorizeBehavior()} >
                    Authorize
                </button>
            </div>
        </>
    );

    return (
        <div className="abcontainer row mb-4">
            {walletAuthorized ? <AuthorizedInfo /> : <UnauthorizedInfo />}
        </div>
    );
}

export default AuthorizeButton