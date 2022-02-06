import React from "react";
import "./Jumbotron.scss";

import ButtonDecorationCorners from "../../static/images/header/ButtonDecorationCorners.png";
import ButtonDecorationBar from "../../static/images/header/ButtonDecorationBar.png";

const strings = {
    companyName: 'Silver Stonks',
    metaverse: 'Metaverse',
    information: 'Come in',
    mint: 'Mint Stonkape',
}

export const Jumbotron = () => {
    return <div className="jumbotron-container">
        <div className="jumbotron-content">
            <div className="jumbotron-title">
                <span className="company-name">
                    {strings.companyName}
                </span>

                <span className="metaverse">
                    {strings.metaverse}
                </span>
            </div>
            <div className="jumbotron-actions">
                <div className="button-container">
                    <button className="information">
                        {strings.information}
                    </button>
                </div>
                <div className="button-details information">
                    <img src={ButtonDecorationCorners} alt="" className="corner-top" />
                    <img src={ButtonDecorationBar} alt="" className="decoration" />
                </div>

                <div className="button-container">
                    <button className="mint">
                        {strings.mint}
                    </button>
                </div>
                <div className="button-details mint">
                    <img src={ButtonDecorationCorners} alt="" className="corner-top" />
                    <img src={ButtonDecorationBar} alt="" className="decoration" />
                </div>
            </div>
        </div>
    </div>
};

export default Jumbotron;