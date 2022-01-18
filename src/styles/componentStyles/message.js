import styled, { css } from "styled-components";

export const MessageButton = styled.button`
    position: fixed;
    right: -53px;
    top: 600px;
    padding: 10px 15px;
    outline: 0;
    border: none;
    background: #9b0707;
    font-size: 1.1rem;
    // font-weight: bold;
    color: azure;
    transform: rotate(-90deg);
    border-radius: 7px 7px 0 0;
    z-index: 2;
    cursor: pointer;
    &:hover {
        background: #d23434;
    }

    @media screen and (max-width: 480px){
        font-size: 1rem;
        padding: 10px 14px
    }
`;

export const Form = styled.form`
        display: flex;
        padding: 1rem;
        width: 350px;
        color: black;
        background: #e6e6e6;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 7px;  
        z-index: 4;
`;

export const FormControl = styled.div`
    padding: 10px;
    width: 100%
`;

export const CloseButton = styled.div`
    cursor: pointer;
    width: 30px;
    z-index: 3;
    position: relative;
    top: -44px;
    right: -156px;
`;

export const FormContainer = styled.form`
    width: 100%;
    padding: 2rem;
    background: #e6e6e6;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;