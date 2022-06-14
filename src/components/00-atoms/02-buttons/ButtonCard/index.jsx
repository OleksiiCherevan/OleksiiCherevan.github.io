import _style from "./index.module.css";
import React from "react";

import { ARROW_LEFT } from "assets/static";

const ButtonCard = (props) => {
    const { children, text, style } = props;

    return (
        <button className={_style["button"]} style={style}>
            {text} <img src={ARROW_LEFT} alt="arrow left" />
        </button>
    );
};

export default ButtonCard;
