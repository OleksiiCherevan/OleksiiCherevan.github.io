import style from "./index.module.css";
import React from "react";

import { USER_PHOTO } from "assets/static";
import WorkedWith from "components/01-molecules/02-blocks/WorkedWith";
import HeaderBlockAndText from "components/01-molecules/06-headers/HeaderBlockAndText";
import ButtonBlock from "components/00-atoms/02-buttons/ButtonBlock";

const Introduction = (props) => {
    const { children } = props;

    return (
        <div className={style["screen"]}>
            <div className={style["content"]}>
                <div className={style["greetings"]}>
                    <div className={style["header"]}>
                        <HeaderBlockAndText
                            header="Your Name Here"
                            text="Intro text: Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua."
                            colorHeader="var(--color-font-secondary)"
                        ></HeaderBlockAndText>
                    </div>

                    <div className={style["button"]}>
                        <ButtonBlock text="Let`s get started"></ButtonBlock>
                    </div>
                </div>

                <div className={style["user-image"]}>
                    <img src={USER_PHOTO} alt="alex"></img>
                </div>
            </div>

            <WorkedWith></WorkedWith>
        </div>
    );
};

export default Introduction;
