import axios from 'axios';
import './LeaderBoard.css';
import { formatWalletAddress } from '../utils';
import { useEffect, useState } from 'react';
import { APIURL, REFRESH_DELAY } from '../config/constants';


const LeaderBoard = ({ isAuthenticated, selectedAddress }) => {
  const [rankings, setRankings] = useState([]);
  const [isLoadingNewRankings, setIsLoadingNewRankings] = useState(false);

  useEffect(() => {
    function getUserRankings() {
      setIsLoadingNewRankings(true);
      axios.get(`${APIURL}/rankings`)
        .then((response) => {
          setRankings(response.data.data);
          setTimeout(() => setIsLoadingNewRankings(false), 1000);
        });
    };

    getUserRankings();
    setInterval(getUserRankings, REFRESH_DELAY);
  }, [setIsLoadingNewRankings]);

  return (
    <>
      <section className="leader-board">
        <div className="table-border">
          <div className="lbtable disabled">
            <div className="table-content">
              <h3>Leaderboard</h3>
              <p>
                Buy or Earn More Tokens in Your Connected Wallet
                <br />
                to Increase Your Ranking.
              </p>

              <small className="text-info">Updated every {REFRESH_DELAY / 1000} seconds.</small>
            </div>
            <div className="lbheader">
              <div className="lbheadercol">Ranking</div>
              <div className="lbheadercol">Wallet</div>
              <div className="lbheadercol">SSTX</div>
            </div>

            <div className="lbbody">
              {rankings && rankings.map((user, index) => {
                const currentUserOwnsWallet = isAuthenticated && user.walletAddress === selectedAddress;
                const leaderboardEntryClass = (currentUserOwnsWallet) ? "lbrowselected" : "lbrow";
                return (
                  user.totalStaked !== 0 && user.totalStaked &&
                  <div className={leaderboardEntryClass} key={index + 1}>
                    <div className="lbcol">
                      {isLoadingNewRankings ? <div className="spinner-border spinner-border-sm small" role="status"></div> : (index + 1)}
                    </div>
                    <div className="lbcol">{user && user.walletAddress && formatWalletAddress(user.walletAddress)}</div>
                    <div className="lbcol">{user && user.totalStaked}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LeaderBoard;
