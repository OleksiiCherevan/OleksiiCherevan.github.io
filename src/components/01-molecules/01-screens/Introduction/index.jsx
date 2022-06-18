import style from "./index.module.css";
import React from "react";

import { RESUME, USER_PHOTO } from "assets/static";
import WorkedWith from "components/01-molecules/02-blocks/WorkedWith";
import HeaderBlockAndText from "components/01-molecules/06-headers/HeaderBlockAndText";
import ButtonBlock from "components/00-atoms/02-buttons/ButtonBlock";

import { INTRODUCTION } from "assets/static";
import HeaderBlock from "components/00-atoms/04-texts/HeaderBlock";
import Text from "components/00-atoms/04-texts/Text";

const Introduction = (props) => {
    const { children } = props;

    return (
        <div className={style["screen"]}>
            <div className={style["content"]}>
                <div className={style["greetings"]}>
                    <div className={style["header"]}>
                        <HeaderBlock text={INTRODUCTION.name}></HeaderBlock>
                        <Text text={INTRODUCTION.description}></Text>
                    </div>

                    <div className={style["button"]}>
                        <ButtonBlock
                            text="Download CV"
                            href={RESUME}
                        ></ButtonBlock>
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
