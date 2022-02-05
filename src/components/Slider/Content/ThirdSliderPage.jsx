import React from "react";
import "./ThirdSliderPage.scss";

const PointOfAccessIcon = (props) => {
    const src = props?.src;

    return <img src={`/src/static/images/${src}.png`} alt="" className="access-point-img" />
}

const pointsOfAccess = [
    {
        text: 'BIDSARENA',
        icon: <PointOfAccessIcon src='bidsarena' />
    },
    {
        text: 'UNDERGROUND LOUNGE',
        icon: <PointOfAccessIcon src='underground-lounge' />
    },
    {
        text: 'FOUNDRY',
        icon: <PointOfAccessIcon src='foundry' />
    },
    {
        text: 'NFT LAB',
        icon: <PointOfAccessIcon src='nft-lab' />
    },
    {
        text: 'SSTX EXCHANGE',
        icon: <PointOfAccessIcon src='sstx-exchange' />
    },
    {
        text: 'META ADVERTISING',
        icon: <PointOfAccessIcon src='meta-advertising' />
    },
    {
        text: 'THE VAULT',
        icon: <PointOfAccessIcon src='the-vault' />
    },
    {
        text: 'ECOMMERCE',
        icon: <PointOfAccessIcon src='ecommerce' />
    },
]

export const ThirdSliderPage = () => {
    const renderPointOfAccess = pointOfAccess => {
        const { icon, text } = pointOfAccess;

        return <div className="access-point col-12 col-sm-4" key={`access-point-${text}`}>
            <div className="access-point-img-container">
                {icon}
            </div>

            <p className="access-point-text">
                {text}
            </p>
        </div>
    }

    return <div className="slider-index-content">
        <div className="access-points-container row">
            {pointsOfAccess.map(renderPointOfAccess)}
        </div>
    </div>
};

export default ThirdSliderPage;