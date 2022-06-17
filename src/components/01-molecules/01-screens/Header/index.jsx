import style from "./index.module.css";
import React from "react";

import { NAVS, SOCIALS } from "assets/static";

import NavHeader from "components/01-molecules/05-bars/NavHeader";
import NavSocials from "components/01-molecules/05-bars/NavSocials";
import NavHeaderMobile from "components/01-molecules/05-bars/NavHeaderMobile";

const Header = (props) => {
    const { children, navs = NAVS, socials = SOCIALS } = props;

    return (
        <>
            <header className={style["header"]}>
                <NavHeader navs={navs}></NavHeader>
                <NavSocials socials={socials}></NavSocials>
            </header>
            <header className={style["header-mobile"]}>
                <NavHeaderMobile navs={navs}></NavHeaderMobile>
            </header>
        </>
    );
};

export default Header;
