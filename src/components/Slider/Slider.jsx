import React, { useEffect, useState } from "react";
import FirstSliderPage from "./Content/FirstSliderPage";
import FourthSliderPage from "./Content/FourthSliderPage";
import SecondSliderPage from "./Content/SecondSliderPage";
import ThirdSliderPage from "./Content/ThirdSliderPage";
import "./Slider.scss"

const initialNavPills = [
    {
        index: 1,
        title: "Own",
        description: `
            Own NFTs to join the community
            and gain access to Silverback City,
            the Silver Stonks metaverse.
        `,
        content: <FirstSliderPage />,
        active: true,
    },
    {
        index: 2,
        title: "Explore",
        description: `
        Silverback City brings every service
        Silver Stonks offers in one immersive
        experience. Explore the different areas
        of the city and use your avatar to
        interact with different metaverse zones.
        `,
        content: <SecondSliderPage />,
        active: false,
    },
    {
        index: 3,
        title: "Inmerse",
        description: `
        Choose which service of Silverback
        City you want to interact with and
        start living your own story in the
        metaverse.
        `,
        content: <ThirdSliderPage />,
        active: false,
    },
    {
        index: 4,
        title: "Play 2 Earn",
        description: `
        Earn SSTX tokens and free bids to
        win purchasing power by playing
        fun games in the metaverse,
        starting with Bids Arena.
        `,
        content: <FourthSliderPage />,
        active: false,
    },
];

const strings = {
    'pretitle': 'Our Vision',
    'title': 'Acces to Silverback City',
    'subtitle': 'A Way to Earn Passive Income in hard Assets',
};

const defaultSelectedIndex = 1; 

export const Slider = () => {
    const [navPills, setNavPills] = useState(initialNavPills);
    const [selectedIndex, setSelectedIndex] = useState(defaultSelectedIndex);

    useEffect(() => {
        setNavPills(
            navPills.map(navPill => {
                return {
                    ...navPill,
                    active: navPill.index === selectedIndex
                }
            })
        )
    }, [selectedIndex]);

    const renderNavPill = navPill => {
        const { index, title, description, active } = navPill;

        const onNavPillClick = () => {
            setSelectedIndex(index);
        }

        const regex = /\s+/g;
        const cleanedDescription = description
            .replaceAll(regex, ' ')
            .trim();

        return <div className={`nav-pill ${active ? 'active' : null}`} key={`title-${index}`}>
            <div className="nav-pill-title-container" >
                <span className="nav-pill-index">
                    {index}
                </span>

                <span className="nav-pill-title">
                    {title}
                </span>
            </div>

            <div className="nav-pill-content" onClick={onNavPillClick}>
                {cleanedDescription}
            </div>
        </div>
    }

    return <div className="main-home-slider slider" id="main-home-slider">
        <div className="slider-title-container">
            <div className="slider-pre-title">
                {strings.pretitle}
            </div>
            <div className="slider-title">
                {strings.title}
            </div>
            <div className="slider-subtitle">
                {strings.subtitle}
            </div>
        </div>

        <div className="slider-content">
            {navPills[selectedIndex].content}
        </div>

        <div className="slider-nav-pills-container">
            {navPills.map(renderNavPill)}
        </div>
    </div>
};

export default Slider;