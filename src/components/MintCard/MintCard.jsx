import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./MintCard.scss";
import actions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_AMOUNT } from "../../store/types";
const selectOptions = [
  {
    label: "How many SilverBacks do you want to mint?",
    value: 5
  }
];

export const MintCard = () => {
  //Todo Need to Show Connected Address SomeWhere
  const { isConnected, amount, totalSupply, isWrongNetwork } = useSelector(
    (state) => state.blockChain
  );
  const dispatch = useDispatch();
  const { t } = useTranslation("translation", { keyPrefix: "mint_card" });
  const [counter, setCounter] = useState(1);
  const renderOption = ({ label, value }) => (
    <option key={`mint-card-option-${value}`} value={value}>
      {label}
    </option>
  );

  useEffect(() => {
    dispatch(actions.blockChainActions.totalSupply);
    dispatch(actions.blockChainActions.price);
  }, []);

  //;

  const onChange = (e) => {
    e.preventDefault();
    dispatch({
      type: CHANGE_AMOUNT,
      payload: { amount: parseInt(counter) }
    });
  };

  const mint = () => {
    dispatch({
      type: CHANGE_AMOUNT,
      payload: { amount: parseInt(counter) }
    });
    dispatch(actions.blockChainActions.mint);
  };

  const connectWallet = () => {
    dispatch(actions.applicationActions.updateModalStep(3));
    dispatch(actions.applicationActions.updateModalState(true));
  };

  // TODO: fix responsiveness

  return (
    <div className="mint-card-container" id="mint-card">
      <div className="mint-card row">
        <div className="col-12 col-md-6 mint-card-details">
          {/* <img src={LinesDecoration} alt="" className="img-detail lines" /> */}

          {/* <div className="mint-card-title-container">
            <p className="mint-card-title">{t('title')}</p>
            <p className="mint-card-title">{t('subtitle')}</p>
          </div> */}

          <div className="mint-card-price-container presale">
            <span className="mint-card-price-label ">{t("publicSale")}</span>
            <br />
            <span className="mint-card-price font-weight-bold">
              {t("launchPrice")}
            </span>
            &nbsp;
            <span>{t("coin")}</span>
          </div>
          <br />
          <div className="mint-card-price-container text-white">
            <span className="mint-card-price-label color-white">
              {t("soFar")}
            </span>
            &nbsp;
            <span className="mint-card-price text-white">
              {totalSupply}/9999
            </span>
          </div>
          <br />
          <div className="mint-card-counter">
            <button onClick={() => setCounter(counter - 1)}>-</button>
            <input
              type="number"
              className="input-form"
              value={counter > 0 ? counter : ""}
              placeholder={amount}
              onChange={(e) => onChange(e)}
            />
            <br />
            <button onClick={() => setCounter(counter + 1)}>+</button>
          </div>
          <br />
      {/*      <div className="mint-card-buttons">
            {!isConnected && (
              <div className="button-container">
                {
                <button onClick={() => connectWallet()}> 
                
                    {t("connectWallet")}
                  </button>
                }
              </div>
            )}
            {isConnected && !isWrongNetwork && (
              <div className="button-container">
                <button
                  disabled={counter < 1 && !isWrongNetwork}
                  onClick={mint}
                >
                  {t("mintNFT")}
                </button>
              </div>
            )}
            {isConnected && isWrongNetwork && (
              <div className="button-container">
                <button
                  onClick={dispatch(actions.blockChainActions.changeNetwork)}
                >
                  Change Network
                </button>
              </div>
            )}
          </div>
          <div className="mint-card-buttons tooltippy">
            <div style={{ margin: "8px 0 0 0" }} className="button-container">
              <button
                style={{ padding: "2px 7px" }}
                onClick={() => {
                  window.open(
                    "https://silverstonks.com/buy-silverbackcity-nft",
                    "_blank"
                  );
                }}
              > 
                {"PAY WITHOUT CRYPTO"}
              </button>
            </div> */}
            <span class="tooltiptext">
              If you are not comfortable with crypto, you can purchase the NFT
              with regular currency in our ecommerce, and we will mint the NFT for you.
            </span>
          </div>

          {/* <div className="mint-card-action my-5">
            <div className="button-container">
              <button onClick={() => openModalMint()}>{t('btn')}</button>
            </div>
          </div> */}
          {/*<div className="mint-card-select-container">
                    <select name="mint-card" id="mint-card" disabled={true} onChange={onChange} className="mint-card-select">
                        {selectOptions.map(renderOption)}
                    </select>
                </div>*/}
        </div>
      </div>
    </div>
  );
};

export default MintCard;
