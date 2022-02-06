import React, { useState } from "react";
import "./ClansSlider.scss"
import DotsDecoration from "../../static/images/slider/DotsDecoration.png";
import LeftArrow from "../../static/images/gorillas-slider/LeftArrow.png";
import RightArrow from "../../static/images/gorillas-slider/RightArrow.png";
import Gorilla1 from "../../static/images/gorillas-slider/Gorilla1.png";
import Gorilla2 from "../../static/images/gorillas-slider/Gorilla2.png";
import Gorilla3 from "../../static/images/gorillas-slider/Gorilla3.png";
import Background from "../../static/images/gorillas-slider/Backgorund.png";

const initialGorillas = [
    {
        image: Gorilla1,
    },
    {
        image: Gorilla2,
    },
    {
        image: Gorilla3,
    },
]
const initialIndex = 2;

export const ClansSlider = () => {
    const [gorillas, setGorillas] = useState(initialGorillas);
    const [selectedIndex, setSelectedIndex] = useState(initialIndex);

    const step = (increment = 0) => {
        let targetIndex = selectedIndex + increment;

        // Seguridad de que no se pase, ni de más ni de menos
        if (targetIndex >= gorillas.length) targetIndex = 0;
        else if (targetIndex < 0) targetIndex = gorillas.length - 1;

        setSelectedIndex(targetIndex);
    }

    const increment = () => {
        step(1);
    }

    const decrement = () => {
        step(-1);
    }

    const renderGorilla = (index) => {
        if (!index in gorillas) return;

        const { image } = gorillas[index];

        const onGorillaClick = () => {
            setSelectedIndex(index);
        }

        const classes = [
            'clans-slider-gorilla',
            'btn',
        ];
        if (selectedIndex === index) classes.push('active');

        return <button className={classes.join(' ')} onClick={onGorillaClick}>
            <img src={image} alt="Gorilla" className="clans-slider-gorilla-img" />
        </button>
    }

    const getLeftIndex = index => {
        if (index > 0) return index - 1;

        return gorillas.length - 1;
    }

    const getRightIndex = index => {
        if ((index + 1) <= (gorillas.length - 1)) return index + 1;

        return 0;
    }

    return <div className="clans-slider">
        <div className="clans-slider-title-container">
            <div className="clans-slider-title-background">
                <img src="" alt="main clans slider background" className="clans-slider-title-background-img" />
            </div>

            {/* TODO: title decoration */}
            <div className="clans-slider-title">
                CLANS
            </div>
        </div>

        <div className="clans-slider-gorillas-container">
            <img src={DotsDecoration} alt="" className="img-detail dots" />

            <div className="clans-slider-gorilla-left">
                {renderGorilla(
                    getLeftIndex(selectedIndex)
                )}
            </div>

            <span className="btn clans-slider-arrow-left" onClick={() => decrement()}>
                <img src={LeftArrow} alt="left arrow" />
            </span>

            <div className="clans-slider-gorilla-current">
                <img src={Background} alt="current gorilla background" className="clans-slider-gorilla-current-background" />
                {renderGorilla(selectedIndex)}
            </div>

            <span className="btn clans-slider-arrow-right" onClick={() => increment()}>
                <img src={RightArrow} alt="right arrow" />
            </span>

            <div className="clans-slider-gorilla-right">
                {renderGorilla(
                    getRightIndex(selectedIndex)
                )}
            </div>
        </div>
    </div>
};

export default ClansSlider;