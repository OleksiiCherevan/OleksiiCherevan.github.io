import style from "./index.module.css";
import React from "react";
import Main from "components/02-organisms/Main";

const Page = (props) => {
    const { children } = props;
    
    return <div className={style[""]}>
        <Main></Main>
    </div>;
};

export default Page;
