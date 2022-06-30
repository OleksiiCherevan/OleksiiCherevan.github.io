import style from "./index.module.css";
import React from "react";

import { RESUME, USER_PHOTO } from "assets/static";
import WorkedWith from "components/01-molecules/02-blocks/WorkedWith";
import HeaderBlockAndText from "components/01-molecules/06-headers/HeaderBlockAndText";
import ButtonBlock from "components/00-atoms/02-buttons/ButtonBlock";

import { INTRODUCTION } from "assets/static";
import BlockPage from "components/01-molecules/02-blocks/BlockPage";

const Introduction = (props) => {
    const { children } = props;

    return (
        <BlockPage>
            <div className={style["content"]}>
                <div className={style["greetings"]}>
                    <HeaderBlockAndText
                        header={INTRODUCTION.name}
                        text={INTRODUCTION.description}
                    ></HeaderBlockAndText>

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
        </BlockPage>
    );
};

export default Introduction;
