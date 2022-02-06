import React from "react"
import BidsarenaImg from '../static/images/sections/BidsarenaSection.png'
import BidsarenaIcon from '../static/images/slider/IconBidsarena.png'
import GreenBoxTitle from '../static/images/sections/GreenBoxTitle.png'
import VaultImg from '../static/images/sections/VaultSection.png'
import VaultIcon from '../static/images/slider/IconVault.png'
import ExchangeImg from '../static/images/sections/ExchangeSection.png'
import ExchangeIcon from '../static/images/slider/IconExchange.png'
import SilverShopImg from '../static/images/sections/SilverShopSection.png'
import SilverShopIcon from '../static/images/slider/IconEcommerce.png'
import LoungeImg from '../static/images/sections/LoungeSection.png'
import LoungeIcon from '../static/images/slider/IconLounge.png'
import FoundryImg from '../static/images/sections/FoundrySection.png'
import FoundryIcon from '../static/images/slider/IconFoundry.png'

const Sections = () => {
    return (
        <>
            <SectionItemImgRight icon={BidsarenaIcon} title="BIDSARENA" buttonText={"COMING SOON"} img={BidsarenaImg} text="Win purchasing power with our first Play 2 Earn game. Use your bids to win your favorite products at incredible prices. Every auction starts at $0.00 and has a timer. Each bid increases the price by $0.01 and resets the timer by 10 seconds. The last bidder to place a bid before the time runs out wins the item at a price much lower than the regular retail price." />
            <SectionItemImgLeft icon={SilverShopIcon} title="SILVER SHOP" buttonText={"INVEST IN SILVER"} img={SilverShopImg} text="Buy physical silver in Silver Stonks’ Silver Shop to protect yourself against inflation. We take a spin on traditional bullion by making products that appeal to a wider demographic, connecting blockchain with the traditional world of investing in precious metals. Each silver product is tied to a digital certificate of authenticity. Owning our silver bars allows you to claim certificates of authenticity in your digital wallet, which can then be used to earn interest on your silver every month in SSTX."/>
            <SectionItemImgRight icon={VaultIcon} title="THE VAULT" buttonText={"COMING SOON"} img={VaultImg} text="In the Vault you can store your SSTX tokens and digital silver certificates to earn interest in SSTX. There are three ways you can earn interest: 
                                                                                                            - Store your SSTX tokens and earn up to 12% APY.
                                                                                                            - Store your NFT certificates from your physical silver purchases to earn interest up to 6% APY.
                                                                                                            - Store the digital silver you earn in our Play 2 Earn games up to 12%. You need a Silverback NFT to earn passive income in the Play 2 Earn games."/>
            <SectionItemImgLeft id="lounge" icon={LoungeIcon} title={"UNDERGROUND\nLOUNGE"} buttonText={"COMING SOON"} img={LoungeImg} text="Each Silverback holder will have access to the Underground Lounge, an exclusive chatroom to talk about the latest news from everything in crypto to the precious metals market. "/>
            <SectionItemImgRight id="exchange" icon={ExchangeIcon} title="SSTX EXCHANGE" buttonText={"BUY SSTX"} img={ExchangeImg} text="Purchase SSTX using BNB or swap any BSC token for SSTX." />
            <SectionItemImgLeft icon={FoundryIcon} title="FOUNDRY" buttonText={"COMING SOON"} img={FoundryImg} text="Each Silverback holder will have access to the Underground Lounge, an exclusive chatroom to talk about the latest news from everything in crypto to the precious metals market. "/>        
        </>
    );
}




const SectionItemImgRight = ({id="", icon, title, text, buttonText, img }) => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="section-item-img-right col-8 m-auto my-5">
                    <div className="row">
                        <div className="col-6">
                            <div className="title-container"  id={id}>
                                <img id="title-background" src={GreenBoxTitle} alt="" />
                                <img id="title-icon" src={icon} alt="" />
                                <span id="title-text" className="h5">{title}</span>
                            </div>
                            <div className="my-4 py-2">
                                <p>
                                    {text}
                                </p>
                            </div>
                            <div>
                                <div className="button-container">
                                    <button>
                                        {buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>

                <div className="col-2"></div>
            </div>

        </div>
    );
}


const SectionItemImgLeft = ({id="", icon, title, text, buttonText, img }) => {
    return (
        <div className="container my-5">
            <div className="row">
            
                <div className="section-item-img-left col-10 m-auto my-5">
                    <div className="row">

                        <div className="col-8">
                            <img src={img} alt="" />
                        </div>

                        <div className="col-4">
                            <div className="title-container"  id={id}>
                                <img id="title-background" src={GreenBoxTitle} alt="" />
                                <img id="title-icon" src={icon} alt="" />
                                <span id="title-text" className="h5">{title}</span>
                            </div>
                            <div className="my-4 py-2">
                                <p>
                                    {text}
                                </p>
                            </div>
                            <div>
                                <div className="button-container">
                                    <button>
                                        {buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default Sections;