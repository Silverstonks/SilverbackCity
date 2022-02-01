import React from "react";
import ModalDialogs from "./ModalDialogs";
import Stakeform from "./legacy/Stakeform";
import LeaderBoard from "./LeaderBoard";
import { useSelector } from "react-redux";

const Main = () => {
  const { isAuthenticated, walletAddress } = useSelector((state) => state.auth);
  localStorage.clear();
  return (
    <>
      <ModalDialogs />
      <section className="stake">
        <div disabled={"disabled"} className="container">
          <div className="row my-5">
            <div className="col-md-6">
              <Stakeform />
            </div>
            <div className="col-md-6">
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
