import style from "./index.module.css";
import React from "react";
import { CASE_STUDIES, RECENT_WORKS } from "assets/static";
import HeaderBlockAndText from "components/01-molecules/06-headers/HeaderBlockAndText";
import CarouseleRecentWorks from "components/01-molecules/02-blocks/CarouseleRecentWorks";

const RecentWork = (props) => {
    const { children } = props;

    return (
        <div className={style["block"]}>
            <div className={style["header"]}>
                <HeaderBlockAndText
                    header={RECENT_WORKS.header}
                    text={RECENT_WORKS.text}
                    colorHeader="var(--color-font-primary)"
                ></HeaderBlockAndText>
            </div>

            <div className={style["content"]}>
                <CarouseleRecentWorks
                    cards={RECENT_WORKS.works}
                ></CarouseleRecentWorks>
            </div>
        </div>
    );
};

export default RecentWork;
