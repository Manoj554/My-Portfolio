import styled, { css, keyframes } from "styled-components";

//Animations
const moveleft = keyframes`
    0% {
        transform: translateX(-300px);
    }
    100% {
        transform: translateX(0);
    }
`;

const moveright = keyframes`
    0% {
        transform: translateX(300px);
    }
    100% {
        transform: translateX(0);
    }
`;
const movetop = keyframes`
    0% {
        transform: translateY(-300px);
    }
    100% {
        transform: translateY(0);
    }
`;

const movedown = keyframes`
    0% {
        transform: translateY(300px);
    }
    100% {
        transform: translateY(0);
    }
`;

const shake = keyframes`
    0%{
        transform: translateX(0);
    }
    5%{
        transform: translateX(-5px);
    }
    10%{
        transform: translateX(0px);
    }
    15%{
        transform: translateX(5px);
    }
    20%{
        transform: translateX(0px);
    }
    25%{
        transform: translateX(-5px);
    }
    30%{
        transform: translateX(0px);
    }
    35%{
        transform: translateX(5px);
    }
    40%{
        transform: translateX(0px);
    }
    45%{
        transform: translateX(-5px);
    }
    50%{
        transform: translateX(0px);
    }
    55%{
        transform: translateX(5px);
    }
    60%{
        transform: translateX(0px);
    }
    65%{
        transform: translateX(-5px);
    }
    70%{
        transform: translateX(0px);
    }
    75%{
        transform: translateX(5px);
    }
    80%{
        transform: translateX(0px);
    }
    85%{
        transform: translateX(-5px);
    }
    90%{
        transform: translateX(0px);
    }
    95%{
        transform: translateX(5px);
    }
    100%{
        transform: translateX(0px);
    }
`;

const animationObj = {
    movetop, movedown, moveleft, moveright, shake
}

export const AnimatedBox = styled.div`
    width: ${props => props.width ? props.width : '100%'};
    display: none;
    flex-direction: column;
    align-items: ${props => props.align ? props.align : 'center'};
    justify-content: ${props => props.justify ? props.justify : 'center'};
    padding: ${props => props.padding ? props.padding : '1rem'};
    background-color: ${props => props.bg ? props.bg : 'none'};
    min-height: 100%;
    border-radius: ${props => props.br ? props.br : '0'};
    animation: ${props => props.animation && props.animationName ? animationObj[props.animationName] : 'none'} 2s ease-in-out;

    ${props => props.animation && css`
        display: flex;
    `}

    ${props => props.responsive && css`
        @media screen and (max-width: ${props.responsive?.At}px) {
            width: ${props => props.responsive?.width ? props.responsive?.width : 'none'};
            padding: ${props => props.responsive?.padding ? props.responsive?.padding : 0};
        }
    `}

    @media screen and (max-width: 540px){
        width: 100%;
        justify-content: center;
        align-item: center;
        padding: 15px;
    }
`;