import style from "./index.module.css";
import React from "react";
import Header1 from "components/00-atoms/04-texts/Header1";
import Text from "components/00-atoms/04-texts/Text";

const HeaderAndText = (props) => {
    const { children, header, text, colorHeader } = props;

    return (
        <>
            <div className={style["header"]} style={{ color: colorHeader }}>
                <Header1 text={header}></Header1>
            </div>

            <Text text={text}></Text>
        </>
    );
};

export default HeaderAndText;
