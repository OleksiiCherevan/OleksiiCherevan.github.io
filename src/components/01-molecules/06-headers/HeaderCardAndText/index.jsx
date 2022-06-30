import style from "./index.module.css";
import React from "react";
import Text from "components/00-atoms/04-texts/Text";
import HeaderForCard from "components/00-atoms/04-texts/HeaderForCard";

const HeaderCardAndText = (props) => {
    const { children, header, text, colorHeader } = props;

    return (
        <>
            <div className={style["header"]} style={{ color: colorHeader }}>
                <HeaderForCard text={header}></HeaderForCard>
            </div>

            <Text text={text}></Text>
        </>
    );
};

export default HeaderCardAndText;
