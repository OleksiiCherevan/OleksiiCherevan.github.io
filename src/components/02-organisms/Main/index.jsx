import style from "./index.module.css";
import React from "react";
import Header from "components/01-molecules/02-screens/Header";
import Introduction from "components/01-molecules/02-screens/Introduction";
import CaseStudies from "components/01-molecules/02-screens/CaseStudies";

const Main = (props) => {
    const { children } = props;
    
    return <div className={style["main"]}>
        <Header></Header>
        <Introduction></Introduction>
        <CaseStudies></CaseStudies>
    </div>;
};

export default Main;
