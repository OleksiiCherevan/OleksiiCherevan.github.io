import style from "./index.module.css";
import React from "react";
import HeaderBlockAndText from "components/01-molecules/06-headers/HeaderBlockAndText";

import { default as BarTestimonials } from "components/01-molecules/05-bars/BarTestimonials";
import { TESTIMONIALS } from "assets/static";

const Contact = (props) => {
    const { children } = props;

    return (
        <div className={style["block"]}>
            <div className={style["header"]}>
                <HeaderBlockAndText
                    header="Get In Touch"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    colorHeader="var(--color-font-secondary)"
                ></HeaderBlockAndText>
            </div>

            <div className={style["content"]}>

            </div>
        </div>
    );
};

export default Contact;
