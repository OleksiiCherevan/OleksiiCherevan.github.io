import styles from "./index.module.css";
import React from "react";

import { ARROW_LEFT } from "assets/static";

const TemplateButton = (props) => {
    const { children, text, style } = props;

    return (
        <button className={styles["button"]} style={style}>
            {text} <img src={ARROW_LEFT}></img>
        </button>
    );
};

export default TemplateButton;
