import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrapper, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrapper, WebSiteRights } from "./FooterElements";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FirstLetter } from "../NavBar/NavElements";

import {animateScroll} from 'react-scroll';


const Footer = () => {


    const ToggleToTop = () => {
        animateScroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/" >How it works</FooterLink>
                            <FooterLink to="/" >Testimonials</FooterLink>
                            <FooterLink to="/" >Careers</FooterLink>
                            <FooterLink to="/" >Inverstors</FooterLink>
                            <FooterLink to="/" >Terms of service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/" >Submit video</FooterLink>
                            <FooterLink to="/" >Ambassadors</FooterLink>
                            <FooterLink to="/" >Agency</FooterLink>
                            <FooterLink to="/" >Influences</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/signin" >Contact</FooterLink>
                            <FooterLink to="/signin" >Support</FooterLink>
                            <FooterLink to="/signin" >Destinations</FooterLink>
                            <FooterLink to="/signin" >Sponsorships</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrapper>
                        <SocialLogo to="/" onClick={ToggleToTop}>
                            <FirstLetter>V</FirstLetter>Bank
                        </SocialLogo>
                        <WebSiteRights>VBank © {new Date().getFullYear()} All rights reserved.</WebSiteRights>

                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrapper>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer;
