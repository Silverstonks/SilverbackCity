import React from "react";
import { useTranslation } from "react-i18next";
import "./MintCard.scss";
import actions from "../../store/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
const selectOptions = [
	{
		label: "How many SilverBacks do you want to mint?",
		value: 5,
	},
];

export const MintCard = () => {
	const dispatch = useDispatch();
	const { t } = useTranslation("translation", { keyPrefix: "mint_card" });
	const [counter, setCounter] = useState(0);
	const renderOption = ({ label, value }) => (
		<option key={`mint-card-option-${value}`} value={value}>
			{label}
		</option>
	);

	const onChange = (e) => {
		e.preventDefault();
		setCounter(parseInt(e.target.value));
	};

	const openModalMint = () => {
		dispatch(actions.applicationActions.updateModalStep(1));
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
							{t("soFarPrice")}
						</span>
					</div>
					<br />
					<div className="mint-card-counter">
						<button onClick={() => setCounter(counter - 1)}>-</button>
						<input
							type="number"
							className="input-form"
							value={counter > 0 ? counter : ""}
							placeholder={t("howManyNFTs")}
							onChange={(e) => onChange(e)}
						/>
						<br />
						<button onClick={() => setCounter(counter + 1)}>+</button>
					</div>
					<br />
					<div className="mint-card-buttons">
						<div className="button-container">
							<button onClick={() => alert(counter)}>
								{t("connectWallet")}
							</button>
						</div>
						<div className="button-container">
							<button onClick={() => alert(counter)}>{t("mintNFT")}</button>
						</div>
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
						</div>
						<span class="tooltiptext">
							If you are not comfortable with crypto, you can purchase the NFT
							with regular currency and we will mint the NFT for you
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
