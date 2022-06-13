import style from "./index.module.css";
import React from "react";

import TPage from "components/03-templates/Page";

const Page = (props) => {
    const { children } = props;
    
    return <div className={style[""]}>
        <TPage></TPage>
    </div>;
};

export default Page;
