import style from "./index.module.css";
import React from "react";
import Header from "components/01-molecules/01-screens/Header";
import Introduction from "components/01-molecules/01-screens/Introduction";
import CaseStudies from "components/01-molecules/01-screens/CaseStudies";
import Testimonials from "components/01-molecules/01-screens/Testimonials";
import RecentWork from "components/01-molecules/01-screens/RecentWork";
import Contact from "components/01-molecules/01-screens/Contact";

const Main = (props) => {
    const { children } = props;
    
    return <div className={style["main"]}>
        <Header></Header>
        <Introduction></Introduction>
        <CaseStudies></CaseStudies>
        <Testimonials></Testimonials>
        <RecentWork></RecentWork>
        <Contact></Contact>
    </div>;
};

export default Main;
