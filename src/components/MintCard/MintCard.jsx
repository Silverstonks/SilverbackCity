import React, { useState, useEffect } from "react";
import "./MintCard.scss"
import GorillaBackground from "../../static/images/gorillas-slider/Backgorund.png";
import LinesDecoration from "../../static/images/slider/LinesDecoration.png";

const strings = {
    title: `CITIZEN OF SILVERBACK CITY`,
    btn: 'MINT NFT',
    priceLabel: 'Presale Price:',

}

const selectOptions = [
    {
        label: 'How many SilverBacks do you want to mint?',
        value: 5,
    }
]

export const MintCard = () => {
    const renderOption = ({ label, value }) => <option value={value}>
        {label}
    </option>;

    const onChange = () => {

    }

    return <div className="mint-card-container">
        <div className="mint-card row">
            <div className="col-12 col-md-6 mint-card-details">
                <img src={LinesDecoration} alt="" className="img-detail lines" />
                
                <div className="mint-card-title-container">
                    <p className="mint-card-title">
                        {strings.title}
                    </p>
                </div>

                <div className="mint-card-action">
                    <div className="button-container">
                        <button>
                            {strings.btn}
                        </button>
                    </div>
                </div>

                <div className="mint-card-price-container">
                    <span className="mint-card-price-label">
                        {strings.priceLabel}
                    </span>
                    &nbsp;
                    <span className="mint-card-price">
                        0.5 BNB
                    </span>
                </div>

                <div className="mint-card-select-container">
                    <select name="mint-card" id="mint-card" onChange={onChange} className="mint-card-select">
                        {selectOptions.map(renderOption)}
                    </select>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <img src={GorillaBackground} alt="" className="mint-card-gorilla-background-img" />
            </div>
        </div>
    </div>
};

export default MintCard;