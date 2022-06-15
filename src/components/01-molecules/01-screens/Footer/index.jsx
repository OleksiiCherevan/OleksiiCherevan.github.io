import style from "./index.module.css";
import React from "react";

import { NAVS, SOCIALS } from "assets/static";

const Footer = (props) => {
    const { children } = props;

    return <header className={style["footer"]}>Made with ❤️</header>;
};

export default Footer;
