import style from "./index.module.css";
import React from "react";

import ButtonBigShadow from "components/00-atoms/02-buttons/ButtonBigShadow";
import { USER_PHOTO } from "assets/static";
import WorkedWith from "components/01-molecules/03-blocks/WorkedWith";
import Header1 from "components/00-atoms/04-texts/Header1";
import Text from "components/00-atoms/04-texts/Text";
import HeaderAndText from "components/01-molecules/00-headers/HeaderAndText";

const Introduction = (props) => {
    const { children } = props;

    return (
        <div className={style["screen"]}>
            <div className={style["content"]}>
                <div className={style["greetings"]}>
                    <div className={style["header"]}>
                        <HeaderAndText
                            header="Your Name Here"
                            text="Intro text: Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua."
                            colorHeader="var(--color-font-secondary)"
                        ></HeaderAndText>
                    </div>

                    <div className={style["button"]}>
                        <ButtonBigShadow
                            width="350px"
                            text="Let`s get started"
                        ></ButtonBigShadow>
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
