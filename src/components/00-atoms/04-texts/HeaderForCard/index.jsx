import style from "./index.module.css";
import React, { Children } from "react";

const HeaderForCard = (props) => {
    const { text } = props;

    return <h3 className={style["header"]}>{text}</h3>;
};

export default HeaderForCard;
