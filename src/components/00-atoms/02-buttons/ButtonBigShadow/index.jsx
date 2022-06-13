import style from "./index.module.css";
import React from "react";

const ButtonBigShadow = (props) => {
    const {
        children,
        text,
    } = props;

    return (
        <button
            className={style["button"]}
        >
            {text}
        </button>
    );
};

export default ButtonBigShadow;
