import style from "./index.module.css";
import React from "react";

const CardUser = (props) => {
    const { children, image, text } = props;

    return (
        <a className={style["card"]} href="#">
            <img className={style["image"]} src={image} alt={text}></img>
            {text}
        </a>
    );
};

export default CardUser;
