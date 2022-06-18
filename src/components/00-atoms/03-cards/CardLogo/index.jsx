import style from "./index.module.css";
import React from "react";

const CardLogo = (props) => {
    const { children, image, href, text } = props;

    return (
        <a className={style["card"]} href={href}>
            <img className={style["image"]} src={image} alt={text}></img>
        </a>
    );
};

export default CardLogo;
