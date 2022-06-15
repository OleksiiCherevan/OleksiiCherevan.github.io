import style from "./index.module.css";
import React, { useState } from "react";

const HEIGHT_TO_SHOW_BUTTON = 300;

const ButtonTop = (props) => {
    const { children, text } = props;

    const [isShowTop, setIsShowTop] = useState(false);

    window.onscroll = function () {
        scrollFunction();
    };

    const scrollFunction = () => {
        if (
            document.body.scrollTop > HEIGHT_TO_SHOW_BUTTON ||
            document.documentElement.scrollTop > HEIGHT_TO_SHOW_BUTTON
        ) {
            setIsShowTop(true);
        } else {
            setIsShowTop(false);
        }
    };

    const topFunction = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };

    return isShowTop ? (
        <a className={style["button-top"]} onClick={topFunction} href="#">
            <i class={style["arrow-up"]}></i>
        </a>
    ) : null;
};

export default ButtonTop;
