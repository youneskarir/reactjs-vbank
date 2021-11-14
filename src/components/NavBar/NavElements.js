import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';


export const Nav = styled.nav`
    background: ${({scrollNav}) => scrollNav ? '#000' : 'transparent'};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index:10;

    @media screen and (max-width:960px){
        transition: all .8s ease;
    }
`;


export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    z-index:1;
    padding: 0px 24px;
    max-width: 1100px;
`;


export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size:1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    margin-left: 24px;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;

`;

export const  FirstLetter = styled.span`
    color: ${(p)=> p.theme.current.color};
    font-family: 'Berkshire Swash', cursive;
    margin-right: 5px;
    transform:translateY(2px);
`;


export const MobileIcon = styled.div`
    display: none;
    -webkit-tap-highlight-color: transparent;

    @media screen and (max-width:768px){
        display: flex;
        position: relative;
        top: 0;
        right: 0;
        /* transform: translate(-100%,60%); */
        font-size:1.8rem;
        align-items: center;
        cursor: pointer;
        color:#fff;
    }

`;


export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width:768px){
        display: none;
    }

`;


export const NavItem = styled.li`
    height: 80px;
`;

export const NavLink = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    border-bottom: 3px solid transparent;
    transition: all .5s ease-out;



    &.active{
        border-bottom: 3px solid ${(p)=> p.theme.current.color};
        color:${(p)=> p.theme.current.color};
        transition: all .5s ease-out;
        
    }

    /* &:hover{
        border-bottom: 3px solid ${(p)=> p.theme.current.color};
        
        opacity: .8;
    } */

`;


export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
 
    @media screen and (max-width:768px){
        display: none;
    }


`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: ${(p)=> p.theme.current.color};
    padding: 10px 22px;
    white-space: nowrap;
    color: #010606;
    font-size: 16px;
    outline: none;
    border:none;
    cursor: pointer;
    transition: all .2s ease-in-out;
    text-decoration: none;
    font-weight: 500;
    -webkit-tap-highlight-color: transparent;

    &:hover{
        transition: all .2s ease-in-out;
        background: #fff;
        color:#010606;
    }



`;

