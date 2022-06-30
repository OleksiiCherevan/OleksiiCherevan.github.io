import style from "./index.module.css";
import React from "react";

const BlockPage = (props) => {
    const {
        children,
    } = props;

    return (
        <div className={style["block"]}>
           {children}
        </div>
    );
};

export default BlockPage;
