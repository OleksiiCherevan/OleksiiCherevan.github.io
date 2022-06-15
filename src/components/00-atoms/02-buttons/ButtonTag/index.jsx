import _style from "./index.module.css";
import React from "react";

const ButtonTag = (props) => {
    const { children, text, style, href } = props;
    
    return (
        <a className={_style["button"]} style={style} href={href}>
            {text}
        </a>
    );
};

export default ButtonTag;
