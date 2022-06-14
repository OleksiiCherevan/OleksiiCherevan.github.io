import style from "./index.module.css";
import React from "react";
import CardCaseStudies from "components/01-molecules/04-cards/CardCaseStudies";
import CardCaseStudiesReverse from "components/01-molecules/04-cards/CardCaseStudiesReverse";

const CardsCaseStudies = (props) => {
    const { children, cards = [] } = props;

    return (
        <div className={style["cards"]}>
            {cards.map((card, index) => {
                return (
                    <div key={card.text}>
                        {index % 2 === 0 ? (
                            <CardCaseStudies {...card}></CardCaseStudies>
                        ) : (
                            <CardCaseStudiesReverse
                                {...card}
                            ></CardCaseStudiesReverse>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default CardsCaseStudies;
