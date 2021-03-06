import _style from "./index.module.css";
import React from "react";

import { ARROW_LEFT } from "assets/static";
import TemplateButton from "../TemplateButton";

const ButtonCard = (props) => {
    const { children, text, style, href } = props;

    return (
        // <button className={_style["button"]} style={style}>
        //     {text} <img src={ARROW_LEFT} alt="arrow left" />
        // </button>
        <TemplateButton text={text} href={href} style={{height: "38px", ...style}}></TemplateButton>
    );
};

export default ButtonCard;
