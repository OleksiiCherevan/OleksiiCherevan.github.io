import style from "./index.module.css";
import React from "react";
import CardTestimonial from "components/01-molecules/04-cards/CardTestimonial";

const BarTestimonials = (props) => {
    const { children, cards: testimolials = [] } = props;

    return (
        <div className={style["cards"]}>
            {testimolials.map((card) => {
                return (
                    <CardTestimonial key={card.id} {...card}></CardTestimonial>
                );
            })}
        </div>
    );
};

export default BarTestimonials;
