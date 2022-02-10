import React from "react";
import "./FourthSliderPage.scss";
import Play2Earn from "../../../static/images/slider/Play2Earn.png"
import Silver from "../../../static/images/slider/Silver.png"

const strings = {
    description: "Play in our first Play 2 Earn video game with your avatar. In the apocalyptic setting of Silverback City, the Federal Reserve bankhas blown up and has left gold and silver around the city.Run through the streets of Silverback City collecting gold and silver pebbles.Accumulate enough grams to go to the foundry and melt your gold and silver pebbles into digital coins, bars and statues. Store your digital precious metals in the Vault to earn interest up to 12%.Receive your SSTX and use them to purchase real gold and silver or accumulate Silver Stonks tokens to stake and earn more tokens."
}

const regex = /\s+/g;

export const FourthSliderPage = () => {
    return <div className="slider-index-content">
        <div className="row">
            <div className="col-12 col-md-6">
                <img src={Play2Earn} className="play2earn-img" alt="play to earn" />
            </div>

            <div className="col-12 col-md-6">
                <p className="play2earn-text">
                    {strings.description}
                </p>
                <img src={Silver} alt="pure silver" className="play2earn-img" />
            </div>
        </div>
    </div>
};

export default FourthSliderPage;