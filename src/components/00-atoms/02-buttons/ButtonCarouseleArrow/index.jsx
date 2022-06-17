import style from "./index.module.css";
import React from "react";


const ButtonCarouseleArrow = (props) => {
    const { children, onClick = () => {}, icon } = props;

    return (
        <button className={style["button"]} onClick={onClick}>
            {icon}
        </button>
    );
};

export default ButtonCarouseleArrow;
