import style from "./index.module.css";
import React from "react";
import { CLIENTS } from "assets/static";
import CardClient from "components/00-atoms/03-cards/CardClient";
import Text from "components/00-atoms/04-texts/Text";

const WorkedWith = (props) => {
    const { children, clients = CLIENTS } = props;

    return (
        <div className={style["block"]}>
            <div className={style["header"]}>Worked with</div>

            <div className={style["clients"]}>
                {clients.map((client) => (
                    <CardClient key={client.image} {...client}></CardClient>
                ))}
            </div>
        </div>
    );
};

export default WorkedWith;
