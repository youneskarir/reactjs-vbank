import {
    SideBarWrapper,
    Icon,
    IconClose,
    SideBarLink,
    SideBarMenu,
    SideBarRoute,
    SideBtnWrapper,
    SideBarContainer
} from "./SideBarElements";

const SideBar = ({ isOpen, onClose }) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={onClose}>
            <Icon onClick={onClose}>
                <IconClose />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink
                        smooth={true}
                        duration={400}
                        offset={-80}
                        onClick={onClose} to="about">
                        About
                    </SideBarLink>
                    <SideBarLink
                        smooth={true}
                        duration={400}
                        offset={-80}onClick={onClose} to="discover">
                        Discover
                    </SideBarLink>
                    <SideBarLink
                        smooth={true}
                        duration={400}
                        offset={-80}onClick={onClose} to="services">
                        Services
                    </SideBarLink>
                    <SideBarLink
                        smooth={true}
                        duration={400}
                        offset={-80}onClick={onClose} to="signup">
                        Sign Up
                    </SideBarLink>
                </SideBarMenu>
                <SideBtnWrapper>
                    <SideBarRoute to="/signin">Sign In</SideBarRoute>
                </SideBtnWrapper>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
