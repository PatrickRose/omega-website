import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { LinkDef } from "../utils/utils";
import omegaLogo from "../../public/logo.svg";

const links: LinkDef[] = [
    {
        linkPath: "/",
        linkText: "Home",
        exact: true
    },
    {
        linkPath: "/about-megagames",
        linkText: "What is a megagame?"
    },
    {
        linkPath: "/games",
        linkText: "Games"
    },
    // {
    //     linkPath: '/other-events',
    //     linkText: 'Other Events'
    // },
    {
        linkPath: "/planning",
        linkText: "Planning"
    },
    {
        linkPath: "/podcast",
        linkText: "Podcast"
    },
    {
        linkPath: "/contact",
        linkText: "Contact"
    },
    {
        linkPath: "/code-of-conduct",
        linkText: "Code of Conduct"
    },
    {
        linkPath: "/designer-resources",
        linkText: "Designer Resources"
    },
    {
        linkPath: "/admin",
        linkText: "Admin"
    }
];

const NavigationLinks = (props: { mobile?: boolean }) => {
    const router = useRouter();

    const { mobile } = props;

    const baseClass = mobile
        ? "text-omega-light hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        : "text-omega-light hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium text-center flex justify-center flex-col";
    const activeClass = mobile
        ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
        : "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium";

    return (
        <React.Fragment>
            {links.map((linkdef) => {
                const matches = linkdef.exact
                    ? router.pathname == linkdef.linkPath
                    : router.pathname.startsWith(linkdef.linkPath);

                let className = baseClass;

                if (matches) {
                    className += ` ${activeClass}`;
                }

                return (
                    <Link
                        href={linkdef.linkPath}
                        key={linkdef.linkPath}
                        className={className}
                    >
                        {linkdef.linkText}
                    </Link>
                );
            })}
        </React.Fragment>
    );
};

function getMaxHeight(): string {
    switch (links.length) {
        case 1:
            return "max-h-16";
        case 2:
            return "max-h-32";
        case 3:
            return "max-h-48";
        case 4:
            return "max-h-64";
        case 5:
            return "max-h-72";
        case 6:
            return "max-h-80";
        case 7:
        case 8:
            return "max-h-96";
        case 9:
            return "max-h-112";
        default:
            throw Error(
                `Don't know what the max height for a menu with ${links.length} items in it`
            );
    }
}

const Navbar = () => {
    const [hidden, swapHidden] = useState<boolean>(true);

    const changeHidden = () => {
        swapHidden((prev) => !prev);
    };

    const ariaExpanded = hidden ? "false" : "true";

    const maxHeight = getMaxHeight();

    return (
        <nav className="navbar bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                        {
                            // Mobile menu button-->
                        }
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={ariaExpanded}
                            onClick={changeHidden}
                        >
                            <span className="sr-only">Open main menu</span>
                            {
                                // Icon when menu is closed.
                                // Heroicon name: outline/menu
                                // Menu open: "hidden", Menu closed: "block"
                            }
                            <FontAwesomeIcon
                                className={
                                    "h-6 w-6 " + (hidden ? "block" : "hidden")
                                }
                                icon={faBars}
                            />
                            {
                                // Icon when menu is open.
                                // Heroicon name: outline/x
                                // Menu open: "block", Menu closed: "hidden"
                            }
                            <FontAwesomeIcon
                                className={
                                    "h-6 w-6 " + (hidden ? "hidden" : "block")
                                }
                                icon={faTimes}
                            />
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        <div className="flex shrink-0 items-center">
                            <Image
                                src={omegaLogo}
                                alt="OMEGA logo"
                                height="32"
                                width="32"
                                style={{
                                    maxWidth: "100%",
                                    height: "auto"
                                }}
                            />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <NavigationLinks />
                                {
                                    //Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                // Mobile menu, show/hide based on menu state.
            }
            <div
                className={
                    "sm:hidden transition-all duration-500 ease-in " +
                    (hidden ? "max-h-0 opacity-0" : maxHeight)
                }
                id="mobile-menu"
            >
                <div className="space-y-1 px-2 pt-2 pb-3">
                    <NavigationLinks mobile={true} />
                </div>
            </div>
        </nav>
    );
};

const Header = () => {
    return (
        <header>
            <Navbar />
        </header>
    );
};

export default Header;
