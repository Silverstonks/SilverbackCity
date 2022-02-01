import { useDispatch } from "react-redux";
import actions from "../../store/actions";

const ModalUnstake = () => {
    const dispatch = useDispatch();

    const onclickUnderstood = () => {
        dispatch(actions.applicationActions.setAdviceUnstakeReaded(true));
        dispatch(actions.applicationActions.updateModalState(false));
    }

    return (
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                    Are You Sure You Want to Unstake Before Claiming Your Reward?
                </h5>
                <button
                    type="button"
                    className="close"
                    onClick={() => dispatch(actions.applicationActions.updateModalState(false))}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <p>Remember to claim all SSTX tokens that you have accumulated before you unstake all your tokens. 
                    If you unstake without claiming, you will lose all your accumulated tokens. </p>
                <small>
                    If you wish to continue with the process,  clik 'Understood' and stake again.
                </small>
            </div>
            <div className="modal-footer">
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={onclickUnderstood}>
                    Understood
                </button>
            </div>
        </div>);

}

export default ModalUnstake;