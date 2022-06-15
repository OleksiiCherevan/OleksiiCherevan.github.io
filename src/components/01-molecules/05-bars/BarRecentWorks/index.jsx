import style from "./index.module.css";
import React, { useEffect, useRef, useState } from "react";
import CardWork from "components/01-molecules/04-cards/CardWork";

const BarRecentWorks = (props) => {
    const { cards: _works = [], countCards = 2, isNext = true } = props;

    const activeWorks = _works.slice(0, countCards);

    const animationIndex = isNext ? activeWorks.length - 1 : 0;

    return (
        <div className={style["cards"]}>
            {activeWorks.map((card, index) => {
                return (
                    <div key={card.id} className={`${style["card"]} `}>
                        <CardWork
                            imageAnimation={
                                animationIndex === index
                                    ? style["animation"]
                                    : ""
                            }
                            {...card}
                        ></CardWork>
                    </div>
                );
            })}
        </div>
    );
};

export default BarRecentWorks;
