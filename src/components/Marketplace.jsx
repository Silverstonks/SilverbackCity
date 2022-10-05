import React from "react";
import { useTranslation } from "react-i18next";
import LandlordImg from "../static/images/sections/Landlord.png";
import MetaImg from "../static/images/sections/Meta.png";

const Marketplace = () => {
	const { t } = useTranslation("translation", { keyPrefix: "marketplace" });
	return (
		<div className="container">
			<div className="row">
				<div className="marketplace col-md-9 ml-auto ">
					<p className="h4 my-md-auto py-md-5">
						{t("title01")} <br />
						{t("title02")} <span className="title-text">{t("title03")}</span>
					</p>
				</div>
				{/* <div className="col-md-1"></div>
      </div>
      <div className="row sections-container">
        <div className="col-md-1"></div>
        <div className="landlord col-md-5 my-3 my-md-5">
          <div className="landlord-title">
            <span className="h3 title-text">{t('section.landlord.title')}</span>
            <p className=" my-md-auto py-5">{t('section.landlord.subtitle')}</p>
          </div>
          <div className="my-md-5">
            <img className="w-100 mb-4" src={LandlordImg} alt="" />
          </div>
          <div>
            {t('section.landlord.paragraph01')}
            <br />
            {t('section.landlord.paragraph02')}
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="meta col-md-5 my-3 my-md-5" id="meta-advertising">
          <div className="meta-title">
            <span className="h3 title-text">{t('section.advertising.title')} </span>
            <p className="my-md-auto py-5"> {t('section.advertising.subtitle')}</p>
          </div>
          <div className="my-md-5">
            <img className="w-100 my-5" src={MetaImg} alt="" />
          </div>
          <div>{t('section.advertising.paragraph01')}</div>
        </div> */}
			</div>
		</div>
	);
};

export default Marketplace;
