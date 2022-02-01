import { useEffect, useState } from "react";


const ClaimButton = ({ nextRewardDate, onClickClaimBehavior }) => {
    const [currTime, setCurrTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrTime(new Date());
        }, 1000)

        return () => {
            clearInterval(interval);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const isTimeToClaim = nextRewardDate && currTime >= new Date(nextRewardDate * 1000);
    return (
        (
            isTimeToClaim ?
                <button
                    onClick={onClickClaimBehavior}
                    className="btn btn-outline-success w-100">Claim
                </button> :
                <button className="btn btn-secondary w-100" disabled>Claim</button>
        )
    )
}

export default ClaimButton