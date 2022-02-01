import { useDispatch } from "react-redux";
import actions from "../../store/actions";

const ModalRestake = () => {
    const dispatch = useDispatch();

    const onclickUnderstood = () => {
        dispatch(actions.applicationActions.setAdviceStakeReaded(true));
        dispatch(actions.applicationActions.updateModalState(false));
    }

    return (
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                    Are You Sure You Want to Stake Before Claiming Your Reward?
                </h5>
                <button
                    type="button"
                    className="close"
                    onClick={() => dispatch(actions.applicationActions.updateModalState(false))}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <p>If you stake more tokens before claiming the SSTX that you have already earned, 
                    you will lose the tokens you have accumulated. If you can’t claim any tokens now, 
                    wait until your next reward period before you stake more tokens.</p>
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

export default ModalRestake;