import React from "react";
import { CASE_STUDIES } from "assets/static";
import HeaderBlockAndText from "components/01-molecules/06-headers/HeaderBlockAndText";
import BarCaseStudies from "components/01-molecules/05-bars/BarCaseStudies";
import BlockPage from "components/01-molecules/02-blocks/BlockPage";

const CaseStudies = (props) => {
    const { children } = props;

    return (
        <BlockPage background="white">
            <HeaderBlockAndText
                header={CASE_STUDIES.header}
                text={CASE_STUDIES.text}
                color="var(--color-font-primary)"
            ></HeaderBlockAndText>

            <BarCaseStudies cards={CASE_STUDIES.studies}></BarCaseStudies>
        </BlockPage>
    );
};

export default CaseStudies;
