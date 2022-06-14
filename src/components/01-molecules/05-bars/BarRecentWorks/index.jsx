import style from "./index.module.css";
import React from "react";
import CardWork from "components/01-molecules/04-cards/CardWork";

const BarRecentWorks = (props) => {
    const { children, cards: works = [] } = props;

    return (
        <div className={style["cards"]}>
            {works.slice(0, 2).map((card) => {
                return <CardWork key={card.id} {...card}></CardWork>;
            })}
        </div>
    );
};

export default BarRecentWorks;
