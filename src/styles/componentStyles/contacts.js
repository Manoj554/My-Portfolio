import styled, { css } from "styled-components";

export const SocialMedia = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    justify-content: center;

    @media screen and (max-width: 840px){
        justify-content: flex-start;
        padding: 15px;
    }
`;

export const Item = styled.li`
    list-style: none;
    cursor: pointer;
    padding-right: 20px;
    color: ${props => props.color ? props.color : 'white'};
    font-size: 2.5rem;
    &:hover {
        // color: ${props => props.hc ? props.hc : 'gray'};
        transform: scale(1.2);
    }

    @media screen and (max-width: 390px){
        padding-right: 20px;
        font-size: 2rem;
    }
`;

export const TextItem = styled.div`
    color: gray;
    font-size: 1.2rem;
    margin: 10px 0;
    &:hover {
        color: white;
        transform: translateX(6px);
    }
`;