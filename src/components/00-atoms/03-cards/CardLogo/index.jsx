import style from "./index.module.css";
import React from "react";

const CardLogo = (props) => {
    const { children, image, text } = props;

    return (
        <div className={style["card"]}>
            <img src={image} alt={text}></img>
        </div>
    );
};

export default CardLogo;
