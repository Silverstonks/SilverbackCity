import React, { useState } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import Loader from "../LoaderComponent";
import { toast } from "react-toastify";
import actions from "../../store/actions";
import './Stakeform.css'
import ClaimButton from "./ClaimButton";
import AuthorizeButton from "../AuthorizeButton";
import { APIURL, STAKINGADDRESS, THRESHOLD_LEVEL_1, UNIT_LEVEL } from "../../config/constants";

const Stakeform = () => {
  const [stakeValue, setStakeValue] = useState("");
  const [action, setAction] = useState("")
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const {
    stakingContract,
    tokenContract,
    web3,
    totalClaimed,
    nextClaimableReward,
    nextRewardDate,
    totalStaked
  } = useSelector((state) => state.blockChain);
  const { loading, advice } = useSelector((state) => state.application);

  const {
    isAuthenticated,
    walletAuthenticated,
    walletAddress,
    walletAuthorized
  } = useSelector((state) => state.auth);

  const checkStatus = () => {
    dispatch(actions.blockChainActions.getUserDetails());
    if (isAuthenticated && walletAddress) {
      return true;
    } else if (isAuthenticated && !walletAuthenticated) {
      dispatch(actions.applicationActions.updateModalStep(3));
      dispatch(actions.applicationActions.updateModalState(true));
      return false;
    } else {
      dispatch(actions.applicationActions.updateModalStep(1));
      dispatch(actions.applicationActions.updateModalState(true));
      return false;
    }
  };

  // Check if unstake value matches with smart contract threshold level
  const checkUnstakeLevel = () => {
    let error = ""
    let status = false;
    console.log("TOTAL STAKED _ STAKE VALUE", totalStaked, stakeValue, totalStaked - stakeValue)
    if (totalStaked - stakeValue === 0) {
      console.log("TOTAL STAKED _ STAKE VALUE", totalStaked - stakeValue)
      status = true;
      return { status }
    }
    if (totalStaked - stakeValue > THRESHOLD_LEVEL_1) {
      status = true;
      return { status }
    }
    if ((totalStaked - stakeValue) < THRESHOLD_LEVEL_1) {
      error = "You need to unstake a lesser amount, or unstake all tokens";
      return { error }
    }
  }

  // Check if stake value matches with smart contract threshold level
  const checkStakingLevel = () => {
    let error = "";
    let status = false;
    if ((totalStaked + stakeValue) >= THRESHOLD_LEVEL_1) {
      status = true;
      return { status }
    }
    if (totalStaked + stakeValue < THRESHOLD_LEVEL_1) {
      error = "Tokens are less than Membership threshold"
      return { error }
    }
  }

  const onClickStake = async () => {
    setError("")
    clearInterval();
    // Check if user is looged in and wallet is connected
    const status = checkStatus();
    if (!status) return;

    if (!walletAuthorized) {
      setError("Please authorize your wallet first.");
      return;
    }

    // Check if stake value matches with smart contract threshold level
    const stakingStatus = checkStakingLevel();
    console.log("STAKING STATUS", stakingStatus)
    if (stakingStatus && stakingStatus.error) {
      setError(stakingStatus.error)
      return;
    }
    
    // Interact with the smart contract
    try {
      setError("");
      dispatch(actions.applicationActions.setLoading(true));
      setAction("Staking " + stakeValue + " SSTX Tokens...")
      console.log('stakeValue = ' + stakeValue);
      console.log('UNIT_LEVEL = ' + UNIT_LEVEL)
      console.log('config.THRESHOLD_LEVEL_1 = ' + THRESHOLD_LEVEL_1)
      console.log('stakeValue * UNIT_LEVEL = ' + (stakeValue * UNIT_LEVEL).toString())
      console.log('walletAddress = ' + walletAddress);

      const userDetails = await stakingContract.methods
        .getUserDetails(walletAddress)
        .call();

      console.log('*** Stakeform - onClickStake - userDetails = ' + userDetails)
      const stakeValueStr = (stakeValue * UNIT_LEVEL).toString();
      const stakeResponse = await stakingContract.methods
        .stake((stakeValueStr))
        .send({ from: walletAddress });
      console.log("STAKE RESPONSE", stakeResponse);
      if (stakeResponse && stakeResponse.status) {
        dispatch(actions.applicationActions.setLoading(false));
        toast.success("Successfully staked " + stakeValue + " SSTX Tokens.");
        console.log('*** STAKEFORM - userDetails = ' + userDetails);
        dispatch(actions.blockChainActions.getUserDetails());
      } else {
        setError("Unable to stake - Transaction Error");
        toast.error("Transaction Error");
        setStakeValue(0);

        return;
      }
    } catch (err) {
      console.log("STAKE ERROR", err);
      dispatch(actions.applicationActions.setLoading(false));
      setError("Unable to stake - Transaction Error");
      setStakeValue(0);
      toast.error("Transaction Error");
    }
  };

  const onClickUnStake = async () => {
    setError("")
    const status = checkStatus();
    if (!status) return;
    if (!walletAuthorized) {
      setError("Please authorize your wallet first.");
      return;
    }
    const checkUnStakeStatus = checkUnstakeLevel();
    if (checkUnStakeStatus && checkUnStakeStatus.error) {
      setError(checkUnStakeStatus.error)
      return;
    }

    // Check if rewards is 0
    if (nextClaimableSSTXAmount() > 0 && !advice.unstakeWithoutClaim) {
      dispatch(actions.applicationActions.updateModalStep(6));
      dispatch(actions.applicationActions.updateModalState(true));
      return;
    }

    try {
      setError("");
      dispatch(actions.applicationActions.setLoading(true));
      setAction("Unstaking " + stakeValue + " SSTX Tokens...")
      console.log("UNSTAKE VALUE", (stakeValue * UNIT_LEVEL).toString())
      const unStakeResponse = await stakingContract.methods
        .unstake((stakeValue * UNIT_LEVEL).toString())
        .send({ from: walletAddress });
      console.log("UNSTAKE RESPONE", unStakeResponse);
      if (unStakeResponse && unStakeResponse.status) {
        console.log("IN SUCCESS");
        dispatch(actions.applicationActions.setLoading(false));
        toast.success("Successfully Unstaked " + stakeValue + " SSTX Tokens.");
        setStakeValue(0);

        dispatch(actions.blockChainActions.getUserDetails());
      } else {
        setError("Transaction Error");
        toast.error("Transaction Error");
        setStakeValue(0);
        return;
      }
    } catch (err) {
      console.log("ERROR", err);
      dispatch(actions.applicationActions.setLoading(false));
      setError("Transaction Error");
      setStakeValue(0);
      toast.error("Transaction Error");
    }
  };

  const onClickAuthorize = async () => {
    setError("")
    const status = checkStatus();
    if (!status) return;
    dispatch(actions.applicationActions.setLoading(true));
    setAction("Authorizing Wallet...")
    let authorizeValue = 100000000000000000000n;
    try {
      setError("");

      const approveToken = await tokenContract.methods
        .approve(STAKINGADDRESS, web3.utils.toWei(authorizeValue.toString()))
        .send({ from: walletAddress });

      if (approveToken && approveToken.status) {
        console.log("REACHED IN SUCCESS");
        dispatch(actions.applicationActions.setLoading(false));
        console.log('********* INSIDE onClickAuthorize - address = ' + walletAddress)

        dispatch({
          type: "AUTHORIZE_WALLET",
        });

        await axios.patch(`${APIURL}/updateWalletAuthorization/` + walletAddress);

        toast.success("Congrats! Your wallet is authorized.");
        return true;
      } else {
        console.log("REACHED IN FAILURE");
        dispatch(actions.applicationActions.setLoading(false));
        toast.error("Unable to Authorize Wallet");
        return;
      }
    } catch (err) {
      console.log("REACHED IN FAILURE", err);
      dispatch(actions.applicationActions.setLoading(false));
      toast.error("Unable to Authorize Wallet");

      return;
    }
  };

  const onClickClaim = async () => {
    setError("")
    setAction("")
    const status = checkStatus();
    if (!status) return;
    if (!walletAuthorized) {
      setError("Please authorize your wallet first.");
      return;
    }
    try {
      setError("")
      dispatch(actions.applicationActions.setLoading(true));
      // const claimInPlay = nextClaimableReward / UNIT_LEVEL;
      setAction("Claiming SSTX Tokens...")
      const claimTokens = await stakingContract.methods
        .claim()
        .send({ from: walletAddress });
      if (claimTokens && claimTokens.status) {
        console.log("CLAIMED SUCCESSFULLY", claimTokens);
        dispatch(actions.applicationActions.setLoading(false));
        toast.success("Congrats! You claimed SSTX Tokens.");
        dispatch(actions.blockChainActions.getUserDetails());
      }
    } catch (err) {
      dispatch(actions.applicationActions.setLoading(false));
      setError("Unable to claim");
      toast.error("Oops, Unable to claim");
    }
  };

  const nextAvailableClaimDate = () => {
    return !!nextRewardDate ? new Date(nextRewardDate * 1000).toLocaleString() : "";
  }

  const totalSSTXStaked = () => {
    return !!totalStaked ? parseFloat(totalStaked).toFixed(7) : "";
  }

  const nextClaimableSSTXAmount = () => {
    return !!nextClaimableReward ? ((parseFloat(nextClaimableReward) / UNIT_LEVEL).toFixed(7)) : "";
  }

  const totalSSTXEarned = () => {
    return !!totalClaimed ? parseFloat(totalClaimed).toFixed(7) : "";
  }

  if (loading) {
    return (
      <>
        <Loader action={action} />
      </>
    )
  }

  return (
    <>
      <section className="stake-form container">
        <div className="row">
          <div className="stake-form-content col">
            <AuthorizeButton walletAuthorized={walletAuthorized}
              onClickAuthorizeBehavior={onClickAuthorize}
              walletAddress={walletAddress || "............................."} />
            <h2>Stake Your SSTX</h2>
            <p>Enter the amount you wish to stake.</p>
          </div>
        </div>
        <div className="form">
          
          {/* ELEMENTO UNO DEL FORM */}
            <div className="form-group row no-gutters align-items-end">
              <div className="col-xs-12 col-md-6 col-lg-7">
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  onChange={(e) => setStakeValue(e.target.value)}
                  className="form-control w-100"
                />
                {error && <p style={{ color: "red" }}>{error}</p>}
              </div>
              <div className="col-xs-12 col-md-6 col-lg-5">
                <div className="row no-gutters ml-md-2  d-flex justify-content-around">
                  <button className="btn btn-success col-xs-6 col-sm-6 col-md-5 w-100 d-flex justify-content-center" onClick={() => onClickStake()}>
                    Stake
                  </button>
                
                  <button
                    className="btn btn-secondary col-xs-6 col-sm-6 col-md-5 w-100 d-flex justify-content-center"
                    onClick={() => onClickUnStake()} >
                    Unstake
                  </button>
                </div>
              </div>
            </div>

          {/* ELEMENTO DOS DEL FORM */}
          <div className="amount form-group row no-gutters">
            <div className="col-12 mb-3">
                <label>Total SSTX Staked:</label>
                <input
                  type="text"
                  className="form-control w-100"
                  placeholder="0"
                  disabled="disabled"
                  value={totalSSTXStaked()} />
            </div>
          </div>

          {/* ELEMENTO TRES DEL FORM */}
            <div className="form-group row no-gutters align-items-end">
              <div className="col-xs-12 col-md-6 col-lg-7">
                <label>Next Available Claim Time:</label>
                <input
                  type="text"
                  className="form-control mr-1 w-100"
                  disabled="disabled"
                  value={nextAvailableClaimDate()}
                  placeholder="dd/mm/yyyy" />
              </div>
              <div className="col-xs-12 col-md-6 col-lg-4 ml-md-2">
                <ClaimButton nextRewardDate={nextRewardDate} onClickClaimBehavior={onClickClaim} />
              </div>
            </div>
          
          {/* ELEMENTO CUATRO DEL FORM */}
          <div className="earned">
            <div className="form-group row no-gutters align-items-end">
              <div className="col-xs-12 col-md-6 col-lg-7">
                <label>Next Claimable SSTX Amount</label>
                <input
                  type="text"
                  className="form-control mr-1 w-100"
                  disabled="disabled"
                  placeholder="0.0000000"
                  value={nextClaimableSSTXAmount()} />
              </div>
              <div className="col-xs-12 col-md-5 col-lg-4 ml-md-2">
                <button
                  className="btn btn-outline-success w-100"
                  onClick={() => dispatch(actions.blockChainActions.getUserDetails())} >
                  Refresh
                </button>
              </div>
            </div>
          </div>


          {/* ELEMENTO CINCO DEL FORM */}
          <div className="earned form-group row no-gutters">
            <div className="col-12">
                <label>Total SSTX Earned:</label>
                <input
                  type="text"
                  className="form-control mr-1 w-100"
                  placeholder="0.0000000"
                  disabled="disabled"
                  value={totalSSTXEarned()} />
              </div>
          </div>
          <div className="calcMessage">You can claim your reward after the first week.</div>
        </div>
      </section>
    </>
  );
};

export default Stakeform;
