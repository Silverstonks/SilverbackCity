import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import actions from "../../store/actions";
import logo from "./../../static/images/header/Logo2.png";
import whitelist from "./../../static/images/slider/whitelist.png";
const MintModal = () => {
	const dispatch = useDispatch();
	const { t } = useTranslation("translation", { keyPrefix: "mint_modal" });
	const [isVerified, setIsVerified] = useState(false);

	function handleOnChange() {
		setIsVerified(true);
	}
	// const iframeUrl =
	//   "https://afzk.maillist-manage.com/ua/Optin?od=11287ecbcc805e&zx=12daa6a36&tD=1c5df0bdf8a17411&sD=1c5df0bdf8b087c3";
	<script
		type="text/javascript"
		src="https://campaigns.zoho.com/js/zc.iframe.js"
	></script>;
	return (
		<>
			<div className="modal-header">
				{/* <h5 className="modal-title" id="exampleModalLabel">
          {t("title")}
        </h5> */}
				<button
					type="button"
					className="close"
					onClick={() =>
						dispatch(actions.applicationActions.updateModalState(false))
					}
				>
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div className="modal-body">
				<div className="modal-logo">
					{/* <img src={logo} alt="logo" className="logo" /> */}
					<img src={whitelist} alt="earn-logo" className="earn-logo" />
				</div>
				<div id="mc_embed_signup">
					<form
						action="https://silverstonks.us6.list-manage.com/subscribe/post?u=39f45cbed44b9973e285d5772&amp;id=abf2ad2206&amp;f_id=00a604e3f0"
						method="post"
						id="mc-embedded-subscribe-form"
						name="mc-embedded-subscribe-form"
						class="validate"
						target="_blank"
						novalidate
					>
						<div id="mc_embed_signup_scroll">
							<h2>Join Our Pre-Sale Whitelist </h2>
							<div class="indicates-required">
								<span class="asterisk">*</span> indicates required
							</div>
							<div class="mc-field-group">
								<label for="mce-FNAME">First Name </label>
								<input type="text" name="FNAME" class="" id="mce-FNAME" />
								{/* <span id="mce-FNAME-HELPERTEXT" class="helper_text"></span> */}
							</div>
							<div class="mc-field-group">
								<label for="mce-LNAME">Ethereum Wallet Address </label>
								<input type="text" name="LNAME" class="" id="mce-LNAME" />
								<span id="mce-LNAME-HELPERTEXT" class="helper_text">
									Input the ethereum address you want to use during pre-sale.
								</span>
							</div>
							<div class="mc-field-group">
								<label for="mce-EMAIL">
									Email Address <span class="asterisk">*</span>
								</label>
								<input
									type="email"
									name="EMAIL"
									class="required email"
									id="mce-EMAIL"
									required
								/>
								{/* <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span> */}
							</div>
							<div class="mc-field-group size1of2">
								<label for="mce-PHONE">
									How many NFTs do you want to mint?{" "}
								</label>
								<input type="text" name="PHONE" class="" id="mce-PHONE" />
								{/* <span id="mce-PHONE-HELPERTEXT" class="helper_text"></span> */}
							</div>
							<div hidden="true">
								<input type="hidden" name="tags" value="3272097,3272101" />
							</div>
							<div class="clear">
								<button
									type="submit"
									disabled={!isVerified}
									id="mc-embedded-subscribe"
									class="button"
								>
									Subscribe
								</button>
							</div>
							{/* 6Ldyi9EhAAAAAJTurgyEOW2EEdDuS2taCB0KLKNA  */}
							{/* site_key */}
							{/* 6LfssCwdAAAAADaZB0sfbd6wZwTMxvsfcfQ09WCi */}
							{/* locahost_site_key */}
							<ReCAPTCHA
								className="reCaptcha"
								sitekey="6Ldyi9EhAAAAAJTurgyEOW2EEdDuS2taCB0KLKNA"
								onChange={handleOnChange}
							/>
						</div>
					</form>
				</div>

				{/* <iframe frameBorder={0} id="iframewin" title="Mint" width="100%" height="100%" src={iframeUrl}></iframe> */}
			</div>
			{/*<div className="modal-footer">
        <a className="btn btn-success" rel="noreferrer" href="https://metamask.io/download.html" target="_blank">
          Download
        </a>
        </div>*/}
		</>
	);
};

export default MintModal;
