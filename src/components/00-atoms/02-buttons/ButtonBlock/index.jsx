import style from "./index.module.css";
import React from "react";

import { ARROW_LEFT } from "assets/static";

const ButtonBlock = (props) => {
    const { children, text } = props;

    return (
        <button className={style["button"]}>
            {text} <img src={ARROW_LEFT}></img>
        </button>
    );
};

export default ButtonBlock;
