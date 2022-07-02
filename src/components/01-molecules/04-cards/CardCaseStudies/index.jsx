import style from "./index.module.css";
import React from "react";
import ButtonCard from "components/00-atoms/02-buttons/ButtonCard";
import ButtonTag from "components/00-atoms/02-buttons/ButtonTag";
import HeaderCardAndText from "components/01-molecules/06-headers/HeaderCardAndText";

const CardCaseStudies = (props) => {
    const {
        children,
        text,
        textTag,
        header,
        colorPrimary,
        colorSecondary,
        href,
        image,
    } = props;

    return (
        <div className={style["card"]}>
            <div className={style["content"]}>
                <ButtonTag
                    text={textTag}
                    style={{ color: colorPrimary, background: colorSecondary }}
                ></ButtonTag>

                <div className={style["header"]}>
                    <HeaderCardAndText
                        header={header}
                        text={text}
                        colorHeader="var(--color-font-primary)"
                    ></HeaderCardAndText>
                </div>

                <ButtonCard
                    href={href}
                    text="View case study"
                    style={{ background: colorPrimary }}
                ></ButtonCard>
            </div>

            <img
                className={style["image"]}
                loading="lazy"
                src={image}
                alt={header}
            ></img>
        </div>
    );
};

export default CardCaseStudies;
