import { Fragment, useEffect } from "react";
import { FaBars } from 'react-icons/fa'
import ThemeIcon from "../ThemeIcon";
import { useState } from "react";
import { animateScroll } from "react-scroll";
import {
    Nav,
    NavBarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavLink,
    NavBtn,
    FirstLetter,
    NavBtnLink,
    NavItem
} from './NavElements';

const NavBar = ({ onOpen }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        }
        else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const ToggleToTop = () => {
        animateScroll.scrollToTop();
    }

    return (
        <Fragment>
            <Nav scrollNav={scrollNav}>
                <NavBarContainer>
                    <NavLogo to="/" onClick={ToggleToTop} >
                        <FirstLetter>V</FirstLetter>Bank
                    </NavLogo>
                    <MobileIcon>
                        <ThemeIcon />
                        <FaBars onClick={onOpen} />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                to="about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                to="discover">Discover</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                to="services">Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                to="signup">Sign Up</NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <ThemeIcon />
                        <NavBtnLink to="/signin" >Sign In</NavBtnLink>
                    </NavBtn>
                </NavBarContainer>
            </Nav>
        </Fragment>
    )
}

export default NavBar;
