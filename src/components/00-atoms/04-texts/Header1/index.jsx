import style from "./index.module.css";
import React, { Children } from "react";

const Header1 = (props) => {
    const { text } = props;

    return <div className={style["header"]}>{text}</div>;
};

export default Header1;
