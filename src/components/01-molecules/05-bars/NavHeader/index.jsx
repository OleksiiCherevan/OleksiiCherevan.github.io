import style from "./index.module.css";
import React from "react";
import LinkText from "components/00-atoms/01-links/LinkText";

const NavHeader = (props) => {
    const { children, navs = [] } = props;

    return (
        <nav className={style["nav"]}>
            {navs.map((nav) => (
                <LinkText key={nav.text} {...nav}></LinkText>
            ))}
        </nav>
    );
};

export default NavHeader;
