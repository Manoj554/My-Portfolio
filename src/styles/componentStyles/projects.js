import styled, { keyframes, css } from 'styled-components';

const anim = keyframes`
    0%{
        transform: scale(0);
    }
    50%{
        transform: scale(1.2);
    }
    100%{
        transform: scale(1);
    }
`;


export const Card = styled.div`
    width: 100%;
    border-radius: 10px;
    background: #15152a;
    color: white;

    ${props => props.animation && css`
        display: block;
        animation: ${anim} 2s ease-in-out;
    `}
`;

export const CardImage = styled.img`
    width: 100%;
    height: 250px;
`;

export const CardSection = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Button = styled.button`
    padding: 11px 13px;
    margin: 1px;
    width: 200px;
    font-size: 1.2rem;
    background:linear-gradient(245deg, rgba(132, 0, 138, 0.87) 0%, rgba(155, 158, 16, 0.9) 100%);
    color: white;
    border-radius: 8px;
    border:none;
    border-outline:none;
    cursor: pointer;
    &:hover {
        background:linear-gradient(245deg, rgba(13, 138, 0, 1) 0%, rgba(204, 208, 0, 1) 100%);
    }
`;

export const CardButton = styled.button`
    padding: 8px 20px;
    margin: 1px;
    font-size: 1.1rem;
    background:linear-gradient(149deg, rgba(168, 3, 3, 1) 0%, rgba(5, 145, 5, 1) 51%, rgba(47, 47, 255, 1) 100%);
    color: white;
    border-radius: 7px;
    border:none;
    border-outline:none;
    cursor: pointer;
    &:hover {
        background:linear-gradient(149deg, rgba(108, 2, 2, 1) 0%, rgba(4, 78, 4, 1) 51%, rgba(1, 1, 128, 1) 100%);
    }
`;

export const CardActionButtons = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    @media screen and (max-width: 330px){
        flex-direction: column;
        align-items: center;
        height: 100px;
    }
`;

export const StackSection = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem 0;
    color: red;
    font-size: 1.1rem;
`;