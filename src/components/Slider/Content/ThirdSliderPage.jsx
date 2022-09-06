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

	return (
		<div className="slider-index-content">
			<div className="access-points-container row">
				{pointsOfAccess.map(renderPointOfAccess)}
			</div>
		</div>
	);
};

export default ThirdSliderPage;
