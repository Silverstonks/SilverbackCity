import React from "react";
import { useTranslation } from "react-i18next";
import "./MintCard.scss"

const strings = {
    title: `TROOPS OF SILVERBACK CITY`,
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
    const { t, i18n } = useTranslation('translation', { keyPrefix: 'mint_card' });
    
    const renderOption = ({ label, value }) => <option key={`mint-card-option-${value}`} value={value}>
        {label}
    </option>;

    const onChange = () => {

    }

    // TODO: fix responsiveness

    return <div className="mint-card-container">
        <div className="mint-card row">
            <div className="col-12 col-md-6 mint-card-details">
                {/* <img src={LinesDecoration} alt="" className="img-detail lines" /> */}
                
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
                        0.8 BNB
                    </span>
                </div>

                <div className="mint-card-select-container">
                    <select name="mint-card" id="mint-card" disabled={true} onChange={onChange} className="mint-card-select">
                        {selectOptions.map(renderOption)}
                    </select>
                </div>
            </div>
        </div>
    </div>
};

export default MintCard;