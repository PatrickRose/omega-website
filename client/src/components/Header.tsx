import React, {useState} from 'react';
import OmegaLogo from '../logo.svg';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faTimes} from '@fortawesome/free-solid-svg-icons/faTimes';
import {LinkDef} from "../utils/utils";

const links: LinkDef[] = [
    {
        linkPath: '/',
        linkText: 'Home'
    },
    {
        linkPath: 'games',
        linkText: 'Games'
    },
    {
        linkPath: 'other-events',
        linkText: 'Other Events'
    },
    {
        linkPath: 'planning',
        linkText: 'Planning'
    },
    {
        linkPath: 'contact',
        linkText: 'Contact'
    },
];

const NavigationLinks = (props: { mobile?: boolean }) => {
    const {mobile} = props;

    const baseClass = mobile ? "text-omega-light hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" : "text-omega-light hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";
    const activeClass = mobile ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" : "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"

    return <React.Fragment>
        {
            links.map(
                linkdef => <NavLink
                    to={linkdef.linkPath}
                    className={baseClass}
                    activeClassName={activeClass}
                    key={linkdef.linkPath}
                >
                    {linkdef.linkText}
                </NavLink>
            )
        }
    </React.Fragment>
}

function getMaxHeight(): string {
    switch(links.length) {
        case 1: return 'max-h-16';
        case 2: return 'max-h-32';
        case 3: return 'max-h-48';
        case 4: return 'max-h-64';
        case 5: return 'max-h-72';
        default: throw Error(`Don't know what the max height for a menu with ${links.length} items in it`)
    }
}

const Navbar = () => {
    const [hidden, swapHidden] = useState<boolean>(true)

    const changeHidden = () => {
        swapHidden((prev) => !prev);
    }

    const ariaExpanded = hidden ? 'false' : 'true';

    const maxHeight = getMaxHeight();

    return <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {
                        // Mobile menu button-->
                    }
                    <button type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu" aria-expanded={ariaExpanded}
                            onClick={changeHidden}
                    >
                        <span className="sr-only">Open main menu</span>
                        {
                            // Icon when menu is closed.
                            // Heroicon name: outline/menu
                            // Menu open: "hidden", Menu closed: "block"
                        }
                        <FontAwesomeIcon className={"h-6 w-6 " + (hidden ? 'block' : 'hidden')} icon={faBars}/>
                        {
                            // Icon when menu is open.
                            // Heroicon name: outline/x
                            // Menu open: "block", Menu closed: "hidden"
                        }
                        <FontAwesomeIcon className={"h-6 w-6 " + (hidden ? 'hidden' : 'block')} icon={faTimes}/>
                    </button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-center">
                        <img className="block h-8 w-auto"
                             src={OmegaLogo} alt="OMEGA logo"/>
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                            <NavigationLinks/>
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
        <div className={'sm:hidden transition-all duration-500 ease-in ' + (hidden ? 'max-h-0' : maxHeight)} id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
                <NavigationLinks mobile={true}/>
            </div>
        </div>
    </nav>
}


const Header = () => {
    return (
        <header>
            <Navbar/>
        </header>
    );
}

export default Header;
