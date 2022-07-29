import style from "./index.module.css";
import React, { useState } from "react";
import LinkText from "components/00-atoms/01-links/LinkText";
import { SOCIALS } from "assets/static";
import { MENU_BURGER, MENU_CLOSE } from "assets/static";
import NavSocials from "../NavSocials";
const NavHeaderMobile = (props) => {
    const { children, navs = [] } = props;

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className={style["block"]}>
            {isOpen ? (
                <>
                    <button
                        className={`${style["close"]} ${style["button"]} `}
                        onClick={handleClose}
                    >
                        {MENU_CLOSE}
                    </button>
                    <nav className={style["nav"]}>
                        {navs.map((nav) => {
                            return (
                                <a
                                    className={style["nav-button"]}
                                    href={nav.href}
                                >
                                    {nav.text}
                                </a>
                            );
                        })}
                    </nav>
                </>
            ) : (
                <div className={`${style["block"]} ${style["block_mobile"]}`}>
                    <NavSocials socials={SOCIALS}></NavSocials>
                    <button
                        className={`${style["open"]} ${style["button"]} `}
                        onClick={handleOpen}
                    >
                        {MENU_BURGER}
                    </button>
                </div>
            )}
        </div>
    );
};

export default NavHeaderMobile;
