import style from "./index.module.css";
import React from "react";
import HeaderBlock from "components/00-atoms/04-texts/HeaderBlock";
import Text from "components/00-atoms/04-texts/Text";

const HeaderBlockAndText = (props) => {
    const { children, header, text, colorHeader } = props;

    return (
        <>
            <div className={style["header"]} style={{ color: colorHeader }}>
                <HeaderBlock text={header}></HeaderBlock>
            </div>

            <Text text={text}></Text>
        </>
    );
};

export default HeaderBlockAndText;
