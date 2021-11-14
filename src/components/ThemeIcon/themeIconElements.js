import styled from "styled-components";
import {MdColorLens} from 'react-icons/md';



export const ThemeIconB = styled(MdColorLens)`
    margin-right: 12px;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: none;
    color: ${({theme}) => theme.current.color};
    cursor: pointer;

    transition: all .2s ease-in-out;
`;
