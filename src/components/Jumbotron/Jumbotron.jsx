import React from "react";
import "./Jumbotron.scss";

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
                <button className="information">
                    {strings.information}
                </button>

                <button className="mint">
                    {strings.mint}
                </button>
            </div>
        </div>
    </div>
};

export default Jumbotron;