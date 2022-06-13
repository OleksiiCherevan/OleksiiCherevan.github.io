import style from "./index.module.css";
import React from "react";
import { CLIENTS } from "assets/static";
import CardClient from "components/00-atoms/03-cards/CardClient";
import HeaderAndText from "components/01-molecules/00-headers/HeaderAndText";

const CaseStudies = (props) => {
    const { children, clients = CLIENTS } = props;

    return (
        <div className={style["block"]}>
            <div className={style["content"]}>
                <div className={style["header"]}>
                    <HeaderAndText
                        header="Case Studies"
                        text="Solving user and business problems since last 15+ years. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                        colorHeader="var(--color-font-primary)"
                    ></HeaderAndText>
                </div>
            </div>
        </div>
    );
};

export default CaseStudies;
