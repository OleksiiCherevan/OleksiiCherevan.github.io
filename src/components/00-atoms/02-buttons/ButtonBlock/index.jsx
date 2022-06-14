import style from "./index.module.css";
import React from "react";

import { ARROW_LEFT } from "assets/static";
import TemplateButton from "../TemplateButton";

const ButtonBlock = (props) => {
    const { children, text } = props;

    return (
        // <button className={style["button"]}>
        //     {text} <img src={ARROW_LEFT}></img>
        // </button>
        <TemplateButton
            text={text}
            style={{
                border: "1px solid var(--color-secondary)",
                boxShadow: "0px 8px 30px rgba(63, 142, 0, 0.5)",
            }}
        ></TemplateButton>
    );
};

export default ButtonBlock;
