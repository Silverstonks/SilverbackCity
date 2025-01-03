import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import actions from "../store/actions";
import MintModal from "./modals/MintModal";
import ChooseHowConnect from "./modals/ChooseHowConnect";

const ModalDialogs = () => {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const { modalShow, modalStep, error } = useSelector(
    (state) => state.application
  );
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        show={modalShow}
        onHide={() =>
          dispatch(actions.applicationActions.updateModalState(false))
        }
        backdrop="static"
        keyboard={false}
        id="onboardModal"
        dialogClassName={"mint-modal-content "}
        style={{ transform: "translate(0, 5%)", "background-color": "#0E1316" }}
      >
        {modalStep === 3 && <ChooseHowConnect />}
        {/*modalStep === 1 && <LoginModal email={email} setEmail={setEmail} error={error} />*/}
        {/* modalStep === 2 && <VerifyModal setVerificationCode={setVerificationCode} verificationCode={verificationCode} email={email} error={error} />*/}

        {/* TODO this modal was connecting to web3 to load nftContract with the NFTABI, NFTADDRESS (l. 117) */}
        {/*modalStep === 3 && <ConnectWalletModal />*/}
        {/*modalStep === 4 && <MetaMaskModal />*/}
        {/*modalStep === 5 && <ChooseHowConnect />*/}
        {/*modalStep === 6 && <ModalUnstake />*/}
        {/*modalStep === 7 && <ClaimModal />*/}
      </Modal>
    </>
  );
};

export default ModalDialogs;
