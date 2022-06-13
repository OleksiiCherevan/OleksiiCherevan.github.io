import style from "./index.module.css";
import React from "react";
import LinkText from "components/00-atoms/01-links/LinkText";
import LinkImage from "components/00-atoms/01-links/LinkImage";

const NavSocials = (props) => {
    const { children, socials = [] } = props;

    return (
        <nav className={style["nav"]}>
            {socials.map((nav) => (
                <LinkImage key={nav.text} {...nav}>{nav.image}</LinkImage>
            ))}
        </nav>
    );
};

export default NavSocials;
