import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import actions from "../../store/actions";

const VerifyModal = ({ setVerificationCode, verificationCode, email, error }) => {
    const dispatch = useDispatch();

    /*
    const resendCode = () => {
        dispatch(actions.authActions.signUpUser(email));
        toast.info("Verification code resent to " + email);
    }
    */

    const DISABLED = false;
    const COUNTDOWN = 0;

    const [disabledButton, setDisabled] = useState(DISABLED);
    const [showInfo, setInfo] = useState(DISABLED);
    const [counter, setCounter] = useState(COUNTDOWN);

    const resendCode = () => {
        setInfo(true);
        if (!disabledButton) {
            setDisabled(true);
            dispatch(actions.authActions.signUpUser(email));
            toast.info("Verification code resent to " + email);
            setTimeout(() =>{setDisabled(false)}, 30000);
            setCounter(30)
        }  
    };

    useEffect(() => {
        if (counter > 0) {
            setTimeout(() => setCounter(counter - 1), 1000);
        }
    }, [counter]);

    
    return (
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                    Log in or Sign up
                </h5>
                <button
                    type="button"
                    className="close"
                    onClick={() => dispatch(actions.applicationActions.updateModalState(false))} >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <p>Check your email for the verification code and enter it below. <small hidden={!showInfo} >Check your spam folder too.</small></p>
                
                <input
                    type="text"
                    className="form-control"
                    placeholder="123456"
                    autoFocus="autoFocus"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    onKeyPress={(e) =>
                        e.which === 13
                            ? dispatch(actions.authActions.verifyUser(verificationCode, email))
                            : null
                    } />
                {error && (
                    <p className="p-2" style={{ color: "red" }}>
                        {error}
                    </p>
                )}
                <small>
                    By signing up, I agree to Silver Stonks’
                    <b>Terms of Service and Privacy policy.</b>
                </small>
            </div>
            <div className="modal-footer">
                <button className="btn btn-outline-success" type="button" onClick={resendCode} disabled={disabledButton}>
                    Resend <small hidden={!disabledButton}> ({counter} secs)</small>
                </button>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => dispatch(actions.authActions.verifyUser(verificationCode, email))}>
                    Submit
                </button>
            </div>
        </div >
    );
};

export default VerifyModal;