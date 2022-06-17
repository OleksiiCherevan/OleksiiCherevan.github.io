import style from "./index.module.css";
import React, { useEffect, useRef, useState } from "react";
import BarRecentWorks from "components/01-molecules/05-bars/BarRecentWorks";

import { ARROW_LEFT_GRAY, ARROW_RIGHT_GRAY } from "assets/static";
import ButtonCarouseleArrow from "components/00-atoms/02-buttons/ButtonCarouseleArrow";

const CarouseleRecentWorks = (props) => {
    const {
        children,
        cards = [],
        countShowCards = 2,
        countCardsMobile = 1,
    } = props;
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
            <div className={style["carousele-mobile"]}>
                {isMoreThanTwo ? (
                    <div
                        className={style["button-wrapper"]}
                        onClick={(e) => handleDecreaseIndex()}
                    >
                        <ButtonCarouseleArrow
                            onClick={(e) => handleDecreaseIndex()}
                            icon={ARROW_LEFT_GRAY}
                        ></ButtonCarouseleArrow>
                    </div>
                ) : null}

                <BarRecentWorks
                    cards={works}
                    countCards={countCardsMobile}
                    isNext={isNext}
                ></BarRecentWorks>

                {isMoreThanTwo ? (
                    <div
                        className={style["button-wrapper"]}
                        onClick={(e) => handleIncreaseIndex()}
                    >
                        <ButtonCarouseleArrow
                            onClick={(e) => handleIncreaseIndex()}
                            icon={ARROW_RIGHT_GRAY}
                        ></ButtonCarouseleArrow>
                    </div>
                ) : null}
            </div>

            <div className={style["carousele"]}>
                {isMoreThanTwo ? (
                    <div
                        className={style["button-wrapper"]}
                        onClick={(e) => handleDecreaseIndex()}
                    >
                        <ButtonCarouseleArrow
                            onClick={(e) => handleDecreaseIndex()}
                            icon={ARROW_LEFT_GRAY}
                        ></ButtonCarouseleArrow>
                    </div>
                ) : null}

                <BarRecentWorks
                    cards={works}
                    countCards={countShowCards}
                    isNext={isNext}
                ></BarRecentWorks>

                {isMoreThanTwo ? (
                    <div
                        className={style["button-wrapper"]}
                        onClick={(e) => handleIncreaseIndex()}
                    >
                        <ButtonCarouseleArrow
                            onClick={(e) => handleIncreaseIndex()}
                            icon={ARROW_RIGHT_GRAY}
                        ></ButtonCarouseleArrow>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default CarouseleRecentWorks;
