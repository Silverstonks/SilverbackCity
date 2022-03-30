import React from "react";
import { useTranslation } from "react-i18next";
import "./MintCard.scss"
import actions from "../../store/actions";
import { useDispatch } from "react-redux";

const selectOptions = [
    {
        label: 'How many SilverBacks do you want to mint?',
        value: 5,
    }
]

export const MintCard = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation('translation', { keyPrefix: 'mint_card' });
    
    const renderOption = ({ label, value }) => <option key={`mint-card-option-${value}`} value={value}>
        {label}
    </option>;

    const onChange = () => {

    }

    const openModalMint = () => {
      dispatch(actions.applicationActions.updateModalStep(1));
      dispatch(actions.applicationActions.updateModalState(true));
    }

    // TODO: fix responsiveness

    return <div className="mint-card-container">
        <div className="mint-card row">
            <div className="col-12 col-md-6 mint-card-details">
                {/* <img src={LinesDecoration} alt="" className="img-detail lines" /> */}
                
                <div className="mint-card-title-container">
                    <p className="mint-card-title">
                        {t('title')}
                    </p>
                    <p className="mint-card-title">
                        {t('subtitle')}
                    </p>
                </div>


                <div className="mint-card-price-container presale">
                    <span className="mint-card-price-label ">
                        {t('priceLabel')}
                    </span>
                    &nbsp;
                    <span className="mint-card-price font-weight-bold">
                        {t('price')} 
                    </span>
                    &nbsp;
                    <span >{t('coin')}</span>
                </div>
                <div className="mint-card-price-container text-white">
                    <span className="mint-card-price-label color-white">
                        {t('launchLabel')}
                    </span>
                    &nbsp;
                    <span className="mint-card-price text-white">
                        {t('launchPrice')}
                    </span>
                    &nbsp;
                    <span >{t('coin')}</span>
                </div>

                <div className="mint-card-action my-5">
                    <div className="button-container">
                        <button onClick={() => openModalMint()}>
                            {t('btn')}
                        </button>
                    </div>
                </div>
                {/*<div className="mint-card-select-container">
                    <select name="mint-card" id="mint-card" disabled={true} onChange={onChange} className="mint-card-select">
                        {selectOptions.map(renderOption)}
                    </select>
                </div>*/}
            </div>
        </div>
    </div>
};

export default MintCard;