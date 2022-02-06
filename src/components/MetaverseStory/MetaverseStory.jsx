import React, { useState } from "react";
import HistorySliderImg from "../../static/images/sections/HistorySliderImg.png"
import LeftArrow from "../../static/images/gorillas-slider/LeftArrow.png";
import RightArrow from "../../static/images/gorillas-slider/RightArrow.png";
import TitleDecoration from "../../static/images/sections/HistoryTitleDecoration.png";
import "./MetaverseStory.scss";

const initialSlides = [
    {
        image: HistorySliderImg,
        text: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nulla ex ut molestiae voluptates ipsum dolor laborum, voluptatibus
        praesentium dolorum maiores voluptatum recusandae quaerat labore id?
        Accusamus sed eius totam sit.
        Quos ipsa praesentium repudiandae velit, harum, autem consequatur
        minus rem facere eaque earum ut aperiam maiores consequuntur enim
        officia doloribus aut quidem impedit, eum aliquid ipsum omnis? Fugit,
        ipsam aspernatur?
        `,
    },
    {
        image: HistorySliderImg,
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    },
];

const initialIndex = 0;

const strings = {
    title: 'METAVERSE STORY',
    subtitle: 'THE BEGINNING',
}

export const MetaverseStory = () => {
    const [slides, setSlides] = useState(initialSlides);
    const [selectedIndex, setSelectedIndex] = useState(initialIndex);

    const step = (increment = 0) => {
        let targetIndex = selectedIndex + increment;

        // Seguridad de que no se pase, ni de más ni de menos
        if (targetIndex >= slides.length) targetIndex = 0;
        else if (targetIndex < 0) targetIndex = slides.length - 1;

        setSelectedIndex(targetIndex);
    }

    const increment = () => {
        step(1);
    }

    const decrement = () => {
        step(-1);
    }

    const renderPageIndex = (index) => {
        const newIndex = index = parseInt(index);

        const onPageIndexClick = () => {
            setSelectedIndex(newIndex)
        }

        const classes = [
            'metaverse-story-page-index',
            'btn',
        ]
        if (selectedIndex === newIndex) classes.push('active');

        return <button className={classes.join(' ')} key={`page-index-${newIndex}`} onClick={onPageIndexClick}>
            {parseInt(newIndex) + 1}
        </button>
    }

    const { image, text } = slides[selectedIndex];

    return <div className="metaverse-story-container">
        <div className="metaverse-story-title-container">
            <div className="metaverse-story-title-background">
                <img src={TitleDecoration} alt="" className="metaverse-story-title-background-img" />
            </div>
            <span className="metaverse-story-title">
                {strings.title}
            </span>
            <span className="metaverse-story-subtitle">
                {strings.subtitle}
            </span>
        </div>

        <div className="metaverse-story">
            <div className="metaverse-story-img-container">
                <img className="metaverse-story-img" src={image} alt="story background img" />
            </div>

            <div className="metaverse-story-details">
                <div className="metaverse-story-controls">
                    <button className="arrow-left btn" onClick={() => increment()}>
                        <img src={LeftArrow} alt="arrow left" className="arrow-left" />
                    </button>

                    {Object.keys(slides).map(renderPageIndex)}

                    <button className="arrow-right btn" onClick={() => decrement()}>
                        <img src={RightArrow} alt="arrow right" className="arrow-right" />
                    </button>
                </div>

                <div className="metaverse-story-text-container">
                    <p className="metaverse-story-text">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    </div>
}

export default MetaverseStory;