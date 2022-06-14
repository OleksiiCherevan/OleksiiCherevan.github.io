import style from "./index.module.css";
import React, { useEffect, useState } from "react";
import BarRecentWorks from "components/01-molecules/05-bars/BarRecentWorks";

const COUNT_CARDS = 2;
const CarouseleRecentWorks = (props) => {
    const { children, cards = [] } = props;

    const [works, setWorks] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const newArray = getCorrectArray();
        setWorks(newArray);
    }, [index]);

    const getCorrectArray = () => {
        return cards.slice(index, index + COUNT_CARDS);
    };

    const handleDecreaseIndex = (e) => {
        let newIndex = index <= 0 ? cards.length - COUNT_CARDS : index - 1;
        setIndex(newIndex);
    };

    const handleIncreaseIndex = (e) => {
        let newIndex = index + 1 >= cards.length - 1 ? 0 : index + 1;
        setIndex(newIndex);
    };

    return (
        <div className={style["block"]}>
            <div onClick={(e) => handleDecreaseIndex(e)}>{"<"}</div>
            <BarRecentWorks cards={works}></BarRecentWorks>
            <button onClick={(e) => handleIncreaseIndex(e)}>{">"}</button>
        </div>
    );
};

export default CarouseleRecentWorks;
