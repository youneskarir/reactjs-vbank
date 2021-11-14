import { keyframes } from "styled-components";
import styled from "styled-components";


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;




export const LoadingContainer  = styled.div`
    display: ${({isLoading}) => !isLoading ? 'none' : 'flex'};
    height: 100vh;
    width: 100vw;
    background: #010101;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index:100;
    transition: all .2s cubic-bezier(0, 0, 0.47, 0.55);
`;


export const Loading = styled.div`
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    border:.3rem ${({theme}) => theme.current.id === 'G' ? '#01bf71' : '#F94926'} solid;
    border-top-color: transparent;
    border-bottom-color : transparent;
    animation: ${rotate} .9s infinite  ;
    transition: all .2s ease-out;
`;