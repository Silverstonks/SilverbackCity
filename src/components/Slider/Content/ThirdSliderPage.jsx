import React from "react";
import "./ThirdSliderPage.scss";
import Bidsarena from "../../../static/images/slider/IconBidsarena.png";
import Lounge from "../../../static/images/slider/IconLounge.png";
import Foundry from "../../../static/images/slider/IconFoundry.png";
import NftLab from "../../../static/images/slider/IconNftLab.png";
import Exchange from "../../../static/images/slider/IconExchange.png";
import Meta from "../../../static/images/slider/IconMeta.png";
import Vault from "../../../static/images/slider/IconVault.png";
import Ecommerce from "../../../static/images/slider/IconEcommerce.png";
import Play2Earn3 from "../../../static/images/slider/Play2Earn3.png";
import AccessSilverbackcity from "../../../static/images/slider/AccessSilverbackcity.png";
import PropertyHolders from "../../../static/images/slider/PropertyHolders.png";
import { useTranslation } from "react-i18next";

const PointOfAccessIcon = (props) => {
	const src = props?.src;

	return <img src={src} alt="" className="access-point-img" />;
};

const pointsOfAccess = [
	{
		text: "BIDSARENA",
		icon: <PointOfAccessIcon src={Bidsarena} />,
		color: "purple",
	},
	{
		text: "UNDERGROUND LOUNGE",
		icon: <PointOfAccessIcon src={Lounge} />,
		color: "purple",
	},
	{
		text: "FOUNDRY",
		icon: <PointOfAccessIcon src={Foundry} />,
		color: "purple",
	},
	{
		text: "NFT LAB",
		icon: <PointOfAccessIcon src={NftLab} />,
		color: "green",
	},
	{
		text: "SSTX EXCHANGE",
		icon: <PointOfAccessIcon src={Exchange} />,
		color: "green",
	},
	{
		text: "META ADVERTISING",
		icon: <PointOfAccessIcon src={Meta} />,
		color: "purple",
	},
	{
		text: "THE VAULT",
		icon: <PointOfAccessIcon src={Vault} />,
		color: "purple",
	},
	{
		text: "ECOMMERCE",
		icon: <PointOfAccessIcon src={Ecommerce} />,
		color: "green",
	},
];

export const ThirdSliderPage = () => {
	const renderPointOfAccess = (pointOfAccess) => {
		const { icon, text, color } = pointOfAccess;

		return (
			<a
				href="/"
				className="access-point col-lg-4 col-md-6 col-6"
				key={`access-point-${text}`}
			>
				<div className={`access-point-img-container ${color}`}>{icon}</div>

				<p className="access-point-text">{text}</p>
			</a>
		);
	};
	const { t } = useTranslation("translation", { keyPrefix: "propertyholders" });

	return (
		<div className="slider-index-content third-slider-context">
			<div className="access-points-container row">
				<div className="col-12 col-md-6">
					<img
						src={AccessSilverbackcity}
						className="play2earn-img"
						alt="play to earn"
					/>
				</div>
				<div className="col-12 col-md-6 thirdslider">
					<div>
						<img
							src={PropertyHolders}
							alt="property holders silverbackcity icon"
							className="play2earn-img"
						/>
						<h5 className="mt-0 text-left mb-4">
							Invest in real estate through NFT's
						</h5>
						<p className="play2earn-text">
							Silver Stonks will launch Property Holders, an NFT real estate
							marketplace that allows investors to buy pieces of properties in
							the form of NFTs and generate passive income on the properties you
							invest in.
						</p>
					</div>
					<div>
						<img
							src={Play2Earn3}
							alt="property holders silverbackcity icon"
							className="play2earn-img img-2"
						/>
						<p className="play2earn-text">
							Use your avatar from Silverback City to enjoy exclusive benefits,
							like whitelisting for the most popular real estate and a
							percentage of revenue from fees on the platform.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ThirdSliderPage;
