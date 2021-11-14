import { BtnWrapper, ButtonSection, Heading, Img, ImgWrapper, InfoColumn1, InfoColumn2, InforContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from "./InfoElements";
import { ThemeContext } from "styled-components";
import { useContext } from "react";

const InfoSection = ({
    id,
    lightBg,
    imgStart,
    topLine,
    headLine,
    alt,
    imgG,
    imgO,
    buttonLabel,
    darkText,
    lightText,
    HoverBtn,
    dark,
    primary,
    description}) => {
        const theme =  useContext(ThemeContext);


    return (
        <InforContainer id={id} lightBg={lightBg}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrapper>
                                <ButtonSection HoverBtn={HoverBtn} primary={primary} dark={dark} to="home">{buttonLabel}</ButtonSection>
                            </BtnWrapper>
                        </TextWrapper>
                    </InfoColumn1>
                    <InfoColumn2>
                        <ImgWrapper>
                            <Img src={theme.current.id==='G' ? imgG : imgO  } alt={alt}/>
                        </ImgWrapper>
                    </InfoColumn2>
                </InfoRow>
            </InfoWrapper>
        </InforContainer>
    ) 
}

export default InfoSection;
