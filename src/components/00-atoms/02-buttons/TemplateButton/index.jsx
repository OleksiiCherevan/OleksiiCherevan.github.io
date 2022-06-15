import styles from "./index.module.css";
import React from "react";

import { ARROW_LEFT } from "assets/static";

const TemplateButton = (props) => {
    const { children, text, style, href } = props;

    return (
        <a className={styles["button"]} style={style} href={href}>
            {text} <img src={ARROW_LEFT}></img>
        </a>
    );
};

export default TemplateButton;
