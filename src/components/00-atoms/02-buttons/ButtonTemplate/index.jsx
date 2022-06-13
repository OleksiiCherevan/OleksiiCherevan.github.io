import style from "./index.module.css";
import React from "react";

const ButtonTemplate = (props) => {
    const {
        children,
        text,
        height = "100%",
        width = "100%",
    } = props;

    return (
        <button
            className={style["button"]}
            style={{
                height: height,
                width: width,
            }}
        >
            {text}
        </button>
    );
};

export default ButtonTemplate;
