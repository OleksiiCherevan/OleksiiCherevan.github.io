import style from "./index.module.css";
import React from "react";
import Text from "components/00-atoms/04-texts/Text";
import CardUser from "components/00-atoms/03-cards/CardUser";

import { QUOTES } from "assets/static";
import HeaderCardAndText from "components/01-molecules/06-headers/HeaderCardAndText";
import ButtonBlock from "components/00-atoms/02-buttons/ButtonBlock";
import ButtonCard from "components/00-atoms/02-buttons/ButtonCard";

const CardWork = (props) => {
    const { children, text, header, href, image } = props;

    return (
        <div className={style["card"]}>
            <img className={style["image"]} src={image} alt={header}></img>

            <div className={style["header"]}>
                <HeaderCardAndText
                    header={header}
                    text={text}
                ></HeaderCardAndText>
            </div>

            <ButtonCard
                text="Know more"
                style={{
                    width: "140px",
                    boxShadow: "0px 8px 30px rgba(63, 142, 0, 0.5)",
                }}
            ></ButtonCard>
        </div>
    );
};

export default CardWork;
