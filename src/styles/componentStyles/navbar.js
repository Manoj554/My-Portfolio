import styled, { css } from "styled-components";

export const Nav = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-left: 60px;
    z-index: 2;
    ${props => props.position === 'fixed' && css`
        transition: background 2s ease-in-out;
        position: fixed;
        top: 0px;
        left: 0px;
        background: #0b0224;

        @media screen and (max-width: 950px) {
            padding-bottom: 0px;
            padding-left: 80px;
        }
    `}

    @media screen and (max-width: 1272px) {
        flex-direction: column;
        padding-bottom: 20px;
    }

    @media screen and (max-width: 950px) {
        padding-bottom: 0px;
    }

    @media screen and (max-width: 400px) {
        padding-left: 50px;

        ${props => props.position === 'fixed' && css`
            padding-left: 60px;
        `}
    }
`;

export const ToggleMenu = styled.div`
    display: none;
    @media screen and (max-width: 950px) {
        padding: 1rem;
        color: blue;
        width:90%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 2rem;
        font-weight: bold;
    }
`;

export const ToggleMenuButton = styled.button`
    display: none;
    background: transparent;
    padding: 0;
    margin: 0;
    border: 0;
    outline: 0;
    @media screen and (max-width: 950px) {
        display: block;
        position: fixed;
        top: 55px;
        left: 35px;
        color: white;

        ${props => props.position === 'fixed' && css`
            top: 25px;
            left: 35px;
        `}

        @media screen and (max-width: 630px) {
            top: 40px;
            ${props => props.position === 'fixed' && css`
            top: 22px;
        `}

        @media screen and (max-width: 400px) {
            left: 20px;
            ${props => props.position === 'fixed' && css`
            top: 22px;
        `}
    }
`;

export const CloseButton = styled.button`
    color: white;
    background: transparent;
    padding: 0;
    margin: 0;
    border: 0;
    outline: 0;
`;

export const Navcontainer = styled.ul`
    width: ${props => props.width ? props.width : '100%'};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    justify-content: ${props => props.justify ? props.justify : 'flex-start'};
    z-index: 3;
    ${props => props.id === "navigationBar" && css`

    @media screen and (max-width: 950px) {
            display: none;
            ${props => props.toggle && css`
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                padding-left: 30px;
                position: fixed;
                top: -15px;
                left: 0px;
                width: 300px; 
                background: black;
                height: 100vh;
        `}
        }
    `}
`;

export const NavItem = styled.li`
    list-style: none;
    font-family: cursive;
    padding: 0 1rem;
    font-size: 1.8rem;
    font-weight: bold;
    cursor: pointer;
    color: red;
    transition: transform 1s ease-in-out;
    &:hover {
        color: pink;
        transform: scale(1.2);
    }

    @media screen and (max-width: 900px){
        padding: 15px;
    }
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    font-size: 2rem;
    font-weight: bold;
    color: yellow;
    cursor: pointer;
    transition: transform 1s ease-in-out;
    &:hover {
        transform: scale(1.3);
    }

`;

export const ResumeButton = styled.div`
    position: fixed;
    top: 50px;
    right: 30px;
    z-index:2;
    cursor: pointer;

    ${props => props.position === 'fixed' && css`
        top: 20px;
    `}

    @media screen and (max-width: 630px) {
        top: 35px;
        ${props => props.position === 'fixed' && css`
        top: 20px;
    `}
    }
`;