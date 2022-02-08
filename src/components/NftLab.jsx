import React from "react"
import NftLabImg from '../static/images/sections/NftLab.png'
import NftLabIcon from '../static/images/slider/IconNftLab.png'
import GreenBoxTitle from '../static/images/sections/GreenBoxTitle.png'

const NftLab = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="title-nftlab">
                    <span className="h3 title-text">Citizens of Silverback City</span>
                    <p className="my-auto py-5"> Silverback City Zones</p>
                </div>
            </div>
            <div className="row">
                <div className="section-item-img-right col-8 m-auto my-5">
                    <div className="row">
                        <div className="col-6">
                            <div className="title-container">
                                <img id="title-background" src={GreenBoxTitle} alt="" />
                                <img id="title-icon" src={NftLabIcon} alt="" />
                                <span id="title-text" className="h5">NFT LAB</span>
                            </div>
                            <div className="my-4 py-2">
                                <p>
                                    Citizens of Silverback City is a collection of 10,000 Silverback gorillas on the Binance Smart Chain blockchain. Your Silverback is also used as a membership avatar that gives you access to exclusive member rewards, including the ability to earn passive income through the digital silver you earn in our Play 2 Earn games, along with purchasing power you can use to buy precious metals and free bids to acquire the products you love in Bids Arena.
                                </p>
                            </div>

                        </div>

                        <div className="col-6">
                            <img src={NftLabImg} alt="" />
                        </div>
                    </div>
                </div>

                <div className="col-2"></div>
            </div>

        </div>
    );
}

export default NftLab;