import style from "./index.module.css";
import React from "react";
import CardCaseStudies from "../CardCaseStudies";

const CardCaseStudiesReverse = (props) => {

    return (
        <div className={style["card"]}>
           <CardCaseStudies {...props}></CardCaseStudies>
        </div>
    );
};

export default CardCaseStudiesReverse;
