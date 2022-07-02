import style from "./index.module.css";
import React from "react";
import Text from "components/00-atoms/04-texts/Text";
import CardUser from "components/00-atoms/03-cards/CardUser";

import { QUOTES } from "assets/static";
import HeaderCardAndText from "components/01-molecules/06-headers/HeaderCardAndText";
import ButtonBlock from "components/00-atoms/02-buttons/ButtonBlock";
import ButtonCard from "components/00-atoms/02-buttons/ButtonCard";

const CardWork = (props) => {
    const { children, text, header, href, image, imageAnimation } = props;

    return (
        <div className={style["card"]}>
            <img
                className={`${style["image"]} ${imageAnimation}`}
                loading="lazy"
                src={image}
                alt={header}
            ></img>

            <div className={style["header"]}>
                <HeaderCardAndText
                    header={header}
                    text={text}
                ></HeaderCardAndText>
            </div>

            <div className={style["button"]}>
                <ButtonCard
                    text="Know more"
                    style={{
                        width: "100%",
                        boxShadow: "0px 8px 30px rgba(63, 142, 0, 0.5)",
                    }}
                ></ButtonCard>
            </div>
        </div>
    );
};

export default CardWork;
