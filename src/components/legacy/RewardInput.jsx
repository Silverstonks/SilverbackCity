import { useEffect } from "react";
import { useDispatch } from "react-redux";
import actions from "../store/actions";

const RewardInput = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.blockChainActions.getNextClaimableReward());
    }, [dispatch]);

    return (
        <input
            type="text"
            className="form-control"
            placeholder="0"
            disabled="disabled"
        />
    )
}

export default RewardInput