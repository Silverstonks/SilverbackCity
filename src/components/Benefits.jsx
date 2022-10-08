import React from "react";
import { useTranslation } from "react-i18next";
import GreenLineBenefits from "../static/images/sections/GreenLineBenefits.png";

const Benefits = () => {
	const { t } = useTranslation("translation", { keyPrefix: "benefits" });
	return (
		<div className="container">
			<div className="row benefits my-lg-5 my-3 mx-auto">
				<div className="col-lg-3 col-12">
					<p className="h2">
						<span className="title-text">{t("titlegreen")}</span>{" "}
						{t("title")}
					</p>
				</div>
				<img
					className="img-benefits"
					src="/assets/images/silverback-city-benefits.png"
					alt="benefits"
				/>
				<div className="col-lg-2 d-none d-lg-block">
					<img
						src={GreenLineBenefits}
						alt=""
						className="benefits-img"
					/>
				</div>
				<div className="col-lg-5 col-12 h-100">
					<p className="h5 subtitle-text">
						{t("section.play.title")}
					</p>
					<p className="info">{t("section.play.text")}</p>
					<p className="h5 subtitle-text">
						{t("section.incoming.title")}{" "}
					</p>
					<p className="info">{t("section.incoming.text")}</p>
					<p className="h5 subtitle-text">
						{t("section.auctions.title")}
					</p>
					<p className="info">{t("section.auctions.text")}</p>
					<p className="h5 subtitle-text">
						{t("section.cashback.title")}
					</p>
					<p className="info">{t("section.cashback.text")}</p>
					<p className="h5 subtitle-text">
						{t("section.discount.title")}
					</p>
					<p className="info">{t("section.discount.text")}</p>
					<p className="h5 subtitle-text">
						{t("section.customer.title")}
					</p>
					<p className="info">{t("section.customer.text")}</p>
				</div>
			</div>
		</div>
	);
};

export default Benefits;
