import React from "react"
import GreenLineBenefits from '../static/images/sections/GreenLineBenefits.png'


const Benefits = () => {
    return (
        <div className="container">

            <div className="row benefits my-5 mx-auto">
                <div className="col-md-3">
                    <p className="h2"><span className="title-text">NFT</span> BENEFITS</p>
                </div>
                <div className="col-md-2 d-none d-md-block">
                    <img src={GreenLineBenefits} alt="" className="benefits-img" />
                </div>
                <div className="col-md-5 h-100">
                    <p className="h5 subtitle-text">- Play 2 Earn Metaverse Access</p>
                    <p className="info">Your NFT lets you earn digital silver and other rewards by playing entertaining games in the Metaverse.
                        Your avatar will be able to earn bids in Bids Arena by competing with other players.
                        Use your bids to acquire real products you love, like precious metals, electronics, collectibles and much more.</p>
                    <p className="h5 subtitle-text">- Passive Income</p>
                    <p className="info">Stake digital silver you earn in Silverback City to earn SSTX tokens.
                        You can use your SSTX tokens to purchase real silver and other precious metals.</p>
                    <p className="h5 subtitle-text">- Exclusive Auctions</p>
                    <p className="info">Holding your silverback NFTs gives you access to exclusive auctions in Bids Arena,
                        which gives you more chances to win amazing products at incredible prices</p>
                    <p className="h5 subtitle-text">- Cashback</p>
                    <p className="info">Receive a welcome package of bids for Bids Arena when you hold an NFT.
                        When you play you earn cashback on every auction you participate in.
                        This gives you purchasing power for products you love.</p>
                </div>
            </div>
        </div>
    );
}

export default Benefits;
