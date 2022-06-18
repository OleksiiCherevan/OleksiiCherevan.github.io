import style from "./index.module.css";
import React from "react";

import { ARROW_LEFT } from "assets/static";
import TemplateButton from "../TemplateButton";

const ButtonBlock = (props) => {
    const { children, text, height, href } = props;

    return (
       
        <TemplateButton
            text={text}
            href={href}
            style={{
                border: "1px solid var(--color-secondary)",
                boxShadow: "0px 8px 30px rgba(63, 142, 0, 0.5)",
                height: height
            }}
        ></TemplateButton>
    );
};

export default ButtonBlock;
