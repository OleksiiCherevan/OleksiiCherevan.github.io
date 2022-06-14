import style from "./index.module.css";
import React from "react";
import { CASE_STUDIES, RECENT_WORKS } from "assets/static";
import HeaderBlockAndText from "components/01-molecules/06-headers/HeaderBlockAndText";
import BarCaseStudies from "components/01-molecules/05-bars/BarCaseStudies";
import CardWork from "components/01-molecules/04-cards/CardWork";
import BarRecentWorks from "components/01-molecules/05-bars/BarRecentWorks";
import CarouseleRecentWorks from "components/01-molecules/02-blocks/CarouseleRecentWorks";

const RecentWork = (props) => {
    const { children } = props;

    return (
        <div className={style["block"]}>
            <div className={style["header"]}>
                <HeaderBlockAndText
                    header="Recent Work"
                    text="Solving user and business problems since last 15+ years. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                    colorHeader="var(--color-font-primary)"
                ></HeaderBlockAndText>
            </div>

            <div className={style["content"]}>
                <CarouseleRecentWorks cards={RECENT_WORKS}></CarouseleRecentWorks>
            </div>
        </div>
    );
};

export default RecentWork;
