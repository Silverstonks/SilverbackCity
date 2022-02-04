import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../store/actions';

const ClaimButton = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { nfts } = useSelector((state) => state.nft);
  const dispatch = useDispatch();

  const claimNft = () => {
    dispatch(actions.applicationActions.updateModalState(true));
    dispatch(actions.applicationActions.updateModalStep(7));
  };

  return (
    <>
      {/*TODO disable when use is not authenthicated or has no nfts : disabled={!isAuthenticated || nfts.length < 1}     */}
      <button onClick={claimNft} className="btn btn-outline-bgalpha w-100">
        CLAIM
      </button>
    </>
  );
};

export default ClaimButton;
