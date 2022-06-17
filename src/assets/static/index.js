import UserPhoto from "../images/user.png";
import WORK1 from "../images/work1.png";
import WORK2 from "../images/work2.png";
import WORK3 from "../images/work3.png";

import LinkedIn from "../images/linkedIn.svg";
import ArrowLeft from "../images/arrow-left.svg";
import Quotes from "../images/quotes.svg";

export const USER_PHOTO = UserPhoto;

export const ARROW_LEFT = ArrowLeft;
export const ARROW_RIGHT_GRAY = (
    <svg
        width="6"
        height="10"
        viewBox="0 0 6 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M5.63335 4.37364L1.51379 0.259206C1.16776 -0.086402 0.605566 -0.086402 0.259528 0.259206C-0.0865095 0.604814 -0.0865095 1.16631 0.259528 1.51191L3.75196 5L0.259528 8.4881C-0.0865095 8.8337 -0.0865095 9.3952 0.259528 9.7408C0.432545 9.91361 0.65957 10 0.886652 10C1.11373 10 1.34078 9.9136 1.51378 9.7408L5.63333 5.62637C5.97937 5.28076 5.97939 4.71925 5.63335 4.37364Z"
            fill="#9C9C9C"
        />
    </svg>
);

export const ARROW_LEFT_GRAY = (
    <svg
        width="6"
        height="10"
        viewBox="0 0 6 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M0.259719 4.37364L4.37927 0.259206C4.72531 -0.086402 5.2875 -0.086402 5.63354 0.259206C5.97958 0.604814 5.97958 1.16631 5.63354 1.51191L2.14111 5L5.63354 8.4881C5.97958 8.8337 5.97958 9.3952 5.63354 9.7408C5.46052 9.91361 5.2335 10 5.00641 10C4.77933 10 4.55229 9.9136 4.37929 9.7408L0.259738 5.62637C-0.0862999 5.28076 -0.0862999 4.71927 0.259738 4.37366L0.259719 4.37364Z"
            fill="#9C9C9C"
        />
    </svg>
);

export const MENU_BURGER = (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
            fill="white"
        />
    </svg>
);

export const MENU_CLOSE = (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            fill="white"
        />
    </svg>
);

export const QUOTES = Quotes;

export const NAVS = [
    {
        text: "Home",
        href: "#home",
    },
    {
        text: "Case studies",
        href: "#case-studies",
    },
    {
        text: "Testimonials",
        href: "#testimonials",
    },
    {
        text: "Recent work",
        href: "#recent-work",
    },
    {
        text: "Get in touch",
        href: "#contact",
    },
];

export const SOCIALS = [
    {
        id: 0,
        href: "#",
        image: LinkedIn,
    },
];

export const CLIENTS = [
    {
        id: 0,
        href: "#",
        text: "Kabanchik",
        image: LinkedIn,
    },
    {
        id: 1,
        href: "#",
        text: "VITI",
        image: LinkedIn,
    },
    {
        id: 2,
        href: "#",
        text: "DropBox",
        image: LinkedIn,
    },
    {
        id: 3,
        href: "#",
        text: "Helo",
        image: LinkedIn,
    },
    {
        id: 4,
        href: "#",
        text: "Linked",
        image: LinkedIn,
    },
];

export const CASE_STUDIES = [
    {
        id: 0,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
        header: "Work name here",
        textTag: "Fintech",
        colorPrimary: "#FFA217",
        colorSecondary: "#FFF6E9",
        href: "#",
        image: WORK1,
    },
    {
        id: 1,
        text: "Lorem 1psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
        header: "Work name here",
        textTag: "Fintech",
        colorPrimary: "#000AFF",
        colorSecondary: "#D0E6FF",
        href: "#",
        image: WORK2,
    },
    {
        id: 2,
        text: "Lorem 2psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
        header: "Work name here",
        textTag: "Fintech",
        colorPrimary: "#2AB090",
        colorSecondary: "#E0FFF8",
        href: "#",
        image: WORK3,
    },
];

export const TESTIMONIALS = [
    {
        id: 0,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        client: "Client Name",
        image: WORK2,
        href: "#",
    },
    {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        client: "Client Name",
        image: WORK2,
        href: "#",
    },
    {
        id: 2,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        client: "Client Name",
        image: WORK2,
        href: "#",
    },
    {
        id: 3,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        client: "Client Name",
        image: WORK2,
        href: "#",
    },
];

export const RECENT_WORKS = [
    {
        id: 0,
        header: "Work name here1",
        text: "Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
        href: "#",
        image: WORK1,
    },
    {
        id: 1,
        header: "Work name here2",
        text: "Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
        href: "#",
        image: WORK2,
    },
    {
        id: 2,
        header: "Work name here3",
        text: "Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt u",

        href: "#",
        image: WORK3,
    },
    {
        id: 3,
        header: "Work name here4",
        text: "Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt u",

        href: "#",
        image: WORK1,
    },
    {
        id: 4,
        header: "Work name here5",
        text: "Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt u",

        href: "#",
        image: WORK1,
    },
];
