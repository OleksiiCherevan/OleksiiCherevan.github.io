import style from "./index.module.css";
import React from "react";
import { RECENT_WORKS } from "assets/static";
import HeaderBlockAndText from "components/01-molecules/06-headers/HeaderBlockAndText";
import CarouseleRecentWorks from "components/01-molecules/02-blocks/CarouseleRecentWorks";
import BlockPage from "components/01-molecules/02-blocks/BlockPage";

const RecentWork = (props) => {
    const { children } = props;

    return (
        <BlockPage background="white">
            <HeaderBlockAndText
                header={RECENT_WORKS.header}
                text={RECENT_WORKS.text}
                colorHeader="var(--color-font-primary)"
            ></HeaderBlockAndText>

            <CarouseleRecentWorks
                cards={RECENT_WORKS.works}
            ></CarouseleRecentWorks>
        </BlockPage>
    );
};

export default RecentWork;
