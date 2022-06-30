import style from "./index.module.css";
import React from "react";
import HeaderBlockAndText from "components/01-molecules/06-headers/HeaderBlockAndText";

import { default as BarTestimonials } from "components/01-molecules/05-bars/BarTestimonials";
import { TESTIMONIALS } from "assets/static";
import BlockPage from "components/01-molecules/02-blocks/BlockPage";

const Testimonials = (props) => {
    const { children } = props;

    return (
        <BlockPage>
            <div className={style["header"]}>
                <HeaderBlockAndText
                    header={TESTIMONIALS.header}
                    text={TESTIMONIALS.text}
                    colorHeader="var(--color-font-secondary)"
                ></HeaderBlockAndText>
            </div>

            <div className={style["content"]}>
                <BarTestimonials
                    cards={TESTIMONIALS.testimonials}
                ></BarTestimonials>
            </div>
            </BlockPage>
    );
};

export default Testimonials;
