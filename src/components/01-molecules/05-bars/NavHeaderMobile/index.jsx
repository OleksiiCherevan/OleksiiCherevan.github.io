import style from "./index.module.css";
import React, { useState } from "react";
import LinkText from "components/00-atoms/01-links/LinkText";

import { MENU_BURGER, MENU_CLOSE } from "assets/static";
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
                                >{nav.text}</a>
                            );
                        })}
                    </nav>
                </>
            ) : (
                <button
                    className={`${style["open"]} ${style["button"]} `}
                    onClick={handleOpen}
                >
                    {MENU_BURGER}
                </button>
            )}
        </div>
    );
};

export default NavHeaderMobile;
