import style from "./index.module.css";
import React, { useEffect, useRef, useState } from "react";
import BarRecentWorks from "components/01-molecules/05-bars/BarRecentWorks";

import { ARROW_LEFT_GRAY, ARROW_RIGHT_GRAY } from "assets/static";

const CarouseleRecentWorks = (props) => {
    const { children, cards = [], countShowCards = 2 } = props;
    const isMoreThanTwo = cards.length > countShowCards;

    const [works, setWorks] = useState([]);
    const [index, setIndex] = useState(0);

    const [isNext, setIsNext] = useState(true);

    useEffect(() => {
        const newWorks = getVisibleWorks();
        setWorks(newWorks);
    }, [index]);

    const getVisibleWorks = () => {
        let newCards = [...cards, ...cards, ...cards];
        let realIndex = cards.length + index;

        return newCards.slice(realIndex, realIndex + countShowCards + 1);
    };

    const handleDecreaseIndex = () => {
        let newIndex = (index - 1) % cards.length;
        setIsNext(false);
        setIndex(newIndex);
    };

    const handleIncreaseIndex = () => {
        let newIndex = (index + 1) % cards.length;
        setIsNext(true);
        setIndex(newIndex);
    };

    return (
        <div className={style["block"]}>
            {isMoreThanTwo ? (
                <button onClick={(e) => handleDecreaseIndex()}>
                    {ARROW_LEFT_GRAY}
                </button>
            ) : null}

            <BarRecentWorks
                cards={works}
                countCards={countShowCards}
                isNext={isNext}
            ></BarRecentWorks>

            {isMoreThanTwo ? (
                <button onClick={(e) => handleIncreaseIndex()}>
                    {ARROW_RIGHT_GRAY}
                </button>
            ) : null}
        </div>
    );
};

export default CarouseleRecentWorks;
