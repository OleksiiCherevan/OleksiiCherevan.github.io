import style from "./index.module.css";
import React from "react";

const LinkImage = (props) => {
    const { image, href } = props;
    
    return <a className={style["link"]} href={href}>
        <img src={image} href={href}></img>
    </a>
};

export default LinkImage;
