import style from "./index.module.css";
import React from "react";

const LinkText = (props) => {
    const { children, text, href } = props;
    
    return <a className={style["link"]} href={href}>
        {text}
    </a>
};

export default LinkText;
