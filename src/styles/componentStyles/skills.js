import styled, { css } from "styled-components";

export const SkillBox = styled.div`
    width: 100%;
    background: #f9f9f9;
    border-radius: 5px;
`;

export const SkillBar = styled.div`
    width: 0%;
    background: blue;
    height:30px;
    border-radius: 5px 0 0 5px;
    transition: width 2s ease-in-out;
    text-align: right;
    padding-right: 5px;
    color: #b1ccca;
    ${props => props.animate && css`
        width: ${props => props.skill ? props.skill : 50}%;
    `}

`;
