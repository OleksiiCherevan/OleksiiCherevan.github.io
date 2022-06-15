import style from "./index.module.css";
import React, { useEffect, useRef, useState } from "react";
import BarRecentWorks from "components/01-molecules/05-bars/BarRecentWorks";
import TextBox from "components/00-atoms/05-fields/TextBox";
import TextArea from "components/00-atoms/05-fields/TextArea";
import ButtonBlock from "components/00-atoms/02-buttons/ButtonBlock";

const COUNT_CARDS = 2;
const ContactForm = (props) => {
    const { children } = props;

    return (
        <div className={style["block"]}>
            <div className={style["field"]}>
                <label className={style["label"]} htmlFor="Email">
                    Email
                </label>
                <TextBox placeholder="Please enter your email"></TextBox>
            </div>
            <div className={style["field"]}>
                <label className={style["label"]} htmlFor="Mobile">
                    Mobile
                </label>
                <TextBox placeholder="Enter mobile"></TextBox>
            </div>
            <div className={style["field"]}>
                <label className={style["label"]} htmlFor="Mmail">
                    Message
                </label>
                <TextArea placeholder="Enter your message"></TextArea>
            </div>
            <ButtonBlock text="Submit" height='50px'></ButtonBlock>
        </div>
    );
};

export default ContactForm;
