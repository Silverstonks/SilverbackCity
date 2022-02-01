import { useDispatch } from "react-redux";
import actions from "../../store/actions";

const LoginModal = ({ email, setEmail, error }) => {
    const dispatch = useDispatch();

    return (
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                    Log in
                </h5>
                <button
                    type="button"
                    className="close"
                    onClick={() => dispatch(actions.applicationActions.updateModalState(false))}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <p>Enter your email below.</p>
                <input
                    type="email"
                    className="form-control"
                    autoFocus="autoFocus"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={(e) =>
                        e.which === 13
                            // ? dispatch(actions.authActions.signUpUser(window.ethereum.selectedAddress))
                            ? dispatch(actions.authActions.signUpUser(email))
                            : null
                    } />
                {error && (
                    <p className="p-2" style={{ color: "red" }}>
                        {error}
                    </p>
                )}
                <small>
                    By signing up, I agree to Silver Stonks’&nbsp;<b><a className="text-dark" href="https://silverstonks.io/terms.html" rel="noreferrer" target="_blank">Terms of Service and Privacy policy.</a></b>
                </small>
            </div>
            <div className="modal-footer">

                <button
                    className="btn btn-success"
                    type="button"
                    onClick={() => dispatch(actions.authActions.signUpUser(email))}>
                    Submit
                </button>
            </div>
        </div>
    );
}

export default LoginModal;