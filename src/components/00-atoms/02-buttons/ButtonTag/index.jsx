import _style from "./index.module.css";
import React from "react";

const ButtonTag = (props) => {
    const { children, text, style } = props;
    
    return (
        <button className={_style["button"]} style={style}>
            {text}
        </button>
    );
};

export default ButtonTag;
