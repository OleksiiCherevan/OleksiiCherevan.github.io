import style from "./index.module.css";
import React from "react";

const BlockPage = (props) => {
    const { children, background } = props;

    return (
        <div className={style["block"]} style={{ background: background }}>
            <div className={style["content"]}>{children}</div>
        </div>
    );
};

export default BlockPage;
