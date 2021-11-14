import styled from "styled-components";
import {FaTimes } from 'react-icons/fa';
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SideBarContainer = styled.aside`
    z-index: 999;
    position: fixed;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    left: 0;
    transition: .3s ease-in-out;
    opacity: ${({isOpen}) => isOpen ? '1' : '0'};
    top:${({isOpen}) => isOpen ? '0' : '-100%'};

`;

export const Icon = styled.div`
    position: absolute;
    top:1.2rem;
    right: 1.2rem ;
    cursor: pointer;
    background: transparent;
    font-size: 2rem;
    outline: none;
    -webkit-tap-highlight-color: transparent;

`;


export const IconClose = styled(FaTimes)`
    color: white;

`;


export const SideBarWrapper = styled.div`
    color: #fff;

`;

export const SideBarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,80px);
    text-align: center;

    @media screen and (max-width:480px){
        grid-template-rows: repeat(6,60px);
    }

`;

export const SideBarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: .2s ease-in-out;
    color: #fff;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;


    &:hover{
        color: ${(p)=> p.theme.current.color};
        transition:.2s ease-in-out;
    }

`;

export const SideBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const SideBarRoute = styled(LinkR)`
    border-radius: 50px;
    background: ${(p)=> p.theme.current.color};
    white-space: nowrap;
    padding:14px 56px;
    color:#010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer; 
    text-decoration: none;
    transition: all .2s ease-in-out ;
    -webkit-tap-highlight-color: transparent;

    &:hover{
        transition: all .2s ease-in-out ;
        background: #fff;
        
    }


`;