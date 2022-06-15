import style from "./index.module.css";
import React, { useState } from "react";
import Header from "components/01-molecules/01-screens/Header";
import Introduction from "components/01-molecules/01-screens/Introduction";
import CaseStudies from "components/01-molecules/01-screens/CaseStudies";
import Testimonials from "components/01-molecules/01-screens/Testimonials";
import RecentWork from "components/01-molecules/01-screens/RecentWork";
import Contact from "components/01-molecules/01-screens/Contact";
import Footer from "components/01-molecules/01-screens/Footer";
import ButtonTop from "components/00-atoms/02-buttons/ButtonTop";

const Main = (props) => {
    const { children } = props;

    return (
        <div className={style["main"]}>
            <ButtonTop></ButtonTop>
            <Header></Header>

            <div id="home" className={style["block"]}>
                <Introduction></Introduction>
            </div>
            <div id="case-studies" className={style["block"]}>
                <CaseStudies></CaseStudies>
            </div>

            <div id="testimonials" className={style["block"]}>
                <Testimonials></Testimonials>
            </div>

            <div id="recent-work" className={style["block"]}>
                <RecentWork></RecentWork>
            </div>

            <div id="contact" className={style["block"]}>
                <Contact></Contact>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;
