import style from "./index.module.css";
import React from "react";
import { CLIENTS } from "assets/static";
import CardLogo from "components/00-atoms/03-cards/CardLogo";
import Text from "components/00-atoms/04-texts/Text";

const WorkedWith = (props) => {
    const { children, clients = CLIENTS } = props;

    return (
        <div className={style["block"]}>
            <div className={style["header"]}>Worked with</div>

            <div className={style["clients"]}>
                {clients.map((client) => (
                    <CardLogo key={client.id} {...client}></CardLogo>
                ))}
            </div>
        </div>
    );
};

export default WorkedWith;
