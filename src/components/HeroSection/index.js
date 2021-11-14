import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideBg } from "./HeroElements";
import { useState, useContext } from "react";
import { Button } from "../ButtonElements";
import { ThemeContext } from "styled-components";


export const HeroSection = (props) => {
    const [isHover, setIsHover] = useState(false);
    const theme = useContext(ThemeContext);

    const isHoverHandler = () => {
        setIsHover((old) => !old);
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideBg autoPlay loop preload="none" muted src={theme.current.video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>

                <HeroP>Sign up for an new acount today and recieve 250$ in
                    credit towards your
                    next payment.
                </HeroP>
                <HeroBtnWrapper onMouseEnter={isHoverHandler} onMouseLeave={isHoverHandler} >
                    <Button
                        smooth={true}
                        duration={800}
                        spy={true}
                        exact="true"
                        offset={-80}
                        to='signup'
                        primary="true"
                        dark="true"
                    >
                        Get started {isHover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
