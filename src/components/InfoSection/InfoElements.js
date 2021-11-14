import styled from "styled-components";
import { Button } from '../ButtonElements';


export const InforContainer = styled.div`
    color:#fff;
    background: ${({ lightBg }) => lightBg ? '#f9f9f9' : '#010606'};


    @media screen and (max-width:768) {
        padding :100px 0px;
    }
`;


export const InfoWrapper = styled.div`
    display: grid;
    height:100vh;
    z-index:1;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0px 24px ;
    justify-content: center;

`;


export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(aut,1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => imgStart ? `'col1 col2'` : `'col2 col1'`};

    @media screen and (max-width:768px) {
        grid-template-areas: ${({ imgStart }) => imgStart ? `'col1' 'col2'` : `'col2' 'col1'`}; 
    }
`;


export const InfoColumn1 = styled.div`
    margin-bottom: 15px;
    padding:0px 15px;
    grid-area: col1;

    @media screen and (max-width:768px){
        margin-bottom:0;
    }
`;

export const InfoColumn2 = styled.div`
    margin-bottom: 15px;
    padding:0px 15px;
    grid-area: col2;

    @media screen and (max-width:768px){
        margin-bottom:0;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0px;
    padding-bottom: 60px;

    @media screen and (max-width:768px){
        padding-bottom:0;
    }

`;

export const TopLine = styled.p`
    color:${({ theme }) => theme.current.color};
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color:${({ lightText }) => lightText ? '#f7f8fa' : '#010606'};


    @media screen and (max-width:480px){
        font-size: 36px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-top: 35px;
    font-size: 18px;
    line-height: 24px;
    color:${({ darkText }) => darkText ? '#010606' : '#fff'};

`;

export const BtnWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`;


export const ImgWrapper = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin:0px 0px 10px 0px;
    padding-right: 0;


    @media screen and (max-height:660px) and (max-width:768){
        width:60%;
        margin:10px auto 0px auto;
    }
`;
export const ButtonSection = styled(Button)`
    margin-top: 20px;
    background: ${({ theme }) => theme.current.color};
    &:hover{
        box-shadow: none;
        background: ${({ HoverBtn }) => HoverBtn ? 'white' : 'black'};
    }
`;





