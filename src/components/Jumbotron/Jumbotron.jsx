import React from "react";
import "./Jumbotron.scss";
import Logo from "../../static/images/header/Logo.svg"

import ButtonDecorationCorners from "../../static/images/header/ButtonDecorationCorners.png";
import ButtonDecorationBar from "../../static/images/header/ButtonDecorationBar.png";

export const Jumbotron = () => {
    return <div className="jumbotron-container d-flex flex-column justify-content-center ">
        <img src={Logo} alt="" className="w-25 mx-auto my-5" />
        <div className="button-container mx-auto">
            <button className="information">
                ENTER
            </button>
        </div>
    </div>
};

export default Jumbotron;