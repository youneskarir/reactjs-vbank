import styled from "styled-components";
import { Link } from 'react-scroll';


export const Button = styled(Link)`
    white-space: nowrap;
    border-radius: 50px;
    background: ${({ primary, theme }) => primary ? theme.current.color : '#010606'};
    padding: ${({ big }) => big ? '14px 48px' : '12px 30px'};
    color:${({ dark }) => dark ? '#010606' : '#fff'};
    font-size: ${({ fontBig }) => fontBig ? '20px' : '16px'};
    outline: none;
    border:none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .2s ease-in-out;
    -webkit-tap-highlight-color: transparent;

    &:hover{
        transition: all .2s ease-in-out;
        background: ${({ primary, theme }) => primary ? '#fff' : theme.current.color};
        transform: translateY(-3px);
        box-shadow: 2px 0px 5px black;
    }

    &:active{
        transition: all .1s ease-in-out;
        transform: translateY(-1px);
    }

    @media screen and (max-width:768px){
        transform: translateY(-2px);
        &:hover{
           
            background: ${({ primary, theme }) =>  theme.current.color};
            box-shadow: none;
        }

        &:active{
            transition: all .1s ease-in-out;
            transform: translateY(0px);
        }

    }


`;

