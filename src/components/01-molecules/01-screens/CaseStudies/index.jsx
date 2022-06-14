import style from "./index.module.css";
import React from "react";
import { CASE_STUDIES } from "assets/static";
import HeaderBlockAndText from "components/01-molecules/06-headers/HeaderBlockAndText";
import CardCaseStudies from "components/01-molecules/04-cards/CardCaseStudies";
import CardCaseStudiesReverse from "components/01-molecules/04-cards/CardCaseStudiesReverse";
import BarCaseStudies from "components/01-molecules/05-bars/BarCaseStudies";

const CaseStudies = (props) => {
    const { children } = props;

    return (
        <div className={style["block"]}>
            <div className={style["header"]}>
                <HeaderBlockAndText
                    header="Case Studies"
                    text="Solving user and business problems since last 15+ years. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                    colorHeader="var(--color-font-primary)"
                ></HeaderBlockAndText>
            </div>

            <div className={style["content"]}>
                <BarCaseStudies cards={CASE_STUDIES}></BarCaseStudies>
            </div>
        </div>
    );
};

export default CaseStudies;
