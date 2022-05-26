import React from "react";
import "./FourthSliderPage.scss";
import Play2Earn from "../../../static/images/slider/propertyholders.jpg"
import Silver from "../../../static/images/slider/Silver.png"
import { useTranslation } from 'react-i18next';

// const strings = {
//     description: "Silver Stonks will launch Property Holders, an NFT real estate marketplace that allows investors to buy pieces of properties in the form of NFTs and generate passive income on the properties you invest in. Use your avatar from Silverback City to enjoy exclusive benefits, like whitelisting for the most popular real estate and a percentage of revenue from fees on the platform."
// }

const regex = /\s+/g;


export const FourthSliderPage = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'propertyholders' });
    return <div className="slider-index-content">
        <div className="row">
            <div className="col-12 col-md-6">
                <img src={Play2Earn} className="play2earn-img" alt="play to earn" />
            </div>

            <div className="col-12 col-md-6">
                <p className="play2earn-text">
                    {t('description')}
                </p>
                <img src={Silver} alt="pure silver" className="play2earn-img" />
            </div>
        </div>
    </div>
};

export default FourthSliderPage;