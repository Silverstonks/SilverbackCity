import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import actions from '../../store/actions';

const ClaimModal = () => {
  const dispatch = useDispatch();
  const { nfts } = useSelector((state) => state.nft);

  const a = 'Go to the My Certificates tab and select which NFT\'s you would like to claim';
  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Resume Claim</h5>
        <button type="button" className="close" onClick={() => dispatch(actions.applicationActions.updateModalState(false))}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        {Object.values(nfts).map((nft, key) => (
          <div key={key} className="d-flex justify-content-between px-5">
            <span>{nft.itemName}</span> <span>{nft.gasFee} BNB</span>
          </div>
        ))}
        <div className="d-flex justify-content-between px-5 py-3">
          <b>TOTAL</b>
          <b>
            {nfts.length > 0 &&
              nfts.some((nft) => nft.selected && !nft.claimed) &&
              nfts.map((nft) => nft.gasFee).reduce((prevGasFee, currGasFee) => (prevGasFee += currGasFee))}
            BNB
          </b>
        </div>
      </div>
      <div className="modal-footer d-flex justify-content-center">
        <button
          className="btn btn btn-outline-bgalpha btn-claim"
          type="button"
          onClick={() => dispatch(actions.blockChainActions.claimNfts())}
        >
          Claim
        </button>
      </div>
    </div>
  );
};

export default ClaimModal;
