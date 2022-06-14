import style from "./index.module.css";
import React from "react";
import Text from "components/00-atoms/04-texts/Text";
import CardUser from "components/00-atoms/03-cards/CardUser";

import { QUOTES } from "assets/static";

const CardTestimonial = (props) => {
    const { children, text, client, image } = props;

    return (
        <div className={style["border"]}>
            <div className={style["card"]}>
                <Text text={text}></Text>

                <CardUser text={client} image={image}></CardUser>
            </div>
            <img className={style["quotes"]} src={QUOTES}></img>
        </div>
    );
};

export default CardTestimonial;
