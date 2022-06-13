import style from "./index.module.css";
import React from "react";

const Text = (props) => {
    const { text } = props;
    
    return <div className={style["text"]}>{text}</div>;
};

export default Text;
