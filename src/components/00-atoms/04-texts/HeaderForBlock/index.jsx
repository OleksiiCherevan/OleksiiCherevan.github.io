import style from "./index.module.css";
import React, { Children } from "react";

const HeaderForBlock = (props) => {
    const { text } = props;

    return <h2 className={style["header"]}>{text}</h2>;
};

export default HeaderForBlock;
