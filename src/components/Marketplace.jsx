import React from "react"
import LandlordImg from "../static/images/sections/Landlord.png"
import MetaImg from "../static/images/sections/Meta.png"

const Marketplace = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="marketplace col-8 ml-auto my-5">
                    <p className="h2 my-auto py-5">
                        BE PART OF THE SILVERBACK <br />
                        CITY <span className="title-text">MARKETPLACE</span>
                    </p>
                </div>
                <div className="col-1"></div>
            </div>
            <div className="row">

                <div className="landlord col-6  my-5">
                    <div>
                        <span className="h2 title-text">BECOME A LANDLORD</span>
                        <p className=" my-auto py-5">
                            Become A Digital Landlord
                        </p></div>
                    <div><img src={LandlordImg} alt="" /></div>
                    <div>
                        Who wants to own real estate in the big city? Silver Stonks will launch a secondary NFT collection with unique buildings around the city. In Silverback City you can finally own an entire building in the most popular streets. Buy blocks of the city to have advertising rights on your building and earn passive income.
                        <br />
                        If you own the NFT, you will own the exploitation rights over your building. Silver Stonks encourages you to diversify your portfolio between digital and hard assets. Being paid for advertising rights will just be the beginning, as we develop our Play 2 Earn games that let you esrn real assets and stores of value. Get your building in Silverback City and start taking advantage of the NFT world.
                    </div>
                </div>

                <div className=" meta col-6  my-5">
                    <div><span className="h2 title-text">META ADVERTISING </span><p className="my-auto py-5"> Get yoor Advertising</p></div>
                    <div><img src={MetaImg} alt="" /></div>
                    <div>Silver Stonks Meta Advertising connects businesses with landlords. Landlords have the opportunity to earn passive income by renting out advertising space to companies. Every building you own will be a candidate for advertising, depending on the building’s location and value. Companies will have different packages to choose from when advertising in Silverback City. Be the first to take advantage of the new way to advertise in the metaverse.</div>
                </div>
            </div>

        </div>
    );
}

export default Marketplace;
