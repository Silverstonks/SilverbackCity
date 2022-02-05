import React from "react";
import "./FourthSliderPage.scss";

const strings = {
    description: `Play in our first Play 2 Earn video game with your avatar. In the
    apocalyptic setting of Silverback City, the Federal Reserve bank
    has blown up and has left gold and silver around the city. Run
    through the streets of Silverback City collecting gold and silver
    pebbles. Accumulate enough grams to go to the foundry and melt
    your gold and silver pebbles into digital coins, bars and statues.
    Store your digital precious metals in the Vault to earn interest up to
    12%. Receive your SSTX and use them to purchase real gold and
    silver or accumulate Silver Stonks tokens to stake and earn more
    tokens.`
}

export const FourthSliderPage = () => {
    return <div className="slider-index-content">
        <div className="row">
            <div className="col-12 col-md-6">
                <img src={'/src/static/images/play2earn.jpg'} alt="play to earn" />
            </div>

            <div className="col-12 col-md-6">
                <p className="play2earn-text">
                    {strings.description
                        .replaceAll(/\s+/, ' ')
                        .trim()}
                </p>
                <img src={'/src/static/images/pure-silver.jpg'} alt="pure silver" />
            </div>
        </div>
    </div>
};

export default FourthSliderPage;