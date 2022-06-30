import style from "./index.module.css";
import React from "react";
import HeaderForBlock from "components/00-atoms/04-texts/HeaderForBlock";
import Text from "components/00-atoms/04-texts/Text";

const HeaderBlockAndText = (props) => {
    const { children, header, text, colorHeader } = props;

    return (
        <>
            <div className={style["header"]} style={{ color: colorHeader }}>
                <HeaderForBlock text={header}></HeaderForBlock>

                <Text text={text}></Text>
            </div>
        </>
    );
};

export default HeaderBlockAndText;
