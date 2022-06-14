import style from "./index.module.css";
import React from "react";

const CardUser = (props) => {
    const { children, image, text } = props;

    return (
        <div className={style["card"]}>
            <img className={style["image"]} src={image} alt={text}></img>
            {text}
        </div>
    );
};

export default CardUser;
