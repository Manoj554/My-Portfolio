import styled from "styled-components";


export const Header = styled.header`
    width: 100%;
`;

export const TitleText = styled.h1`
    font-weight: 800;
    font-size: 4rem;
    margin: 0;
    padding: 0;
    background: radial-gradient(circle at 17% 44%, rgba(221, 221, 221, 1) 0%, rgba(155, 155, 155, 1) 50%, rgba(126, 128, 128, 1) 100%);
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent;

    @media screen and (max-width: 1150px) {
        font-size: 3.5rem; 
    }
    @media screen and (max-width: 900px) {
        font-size: 2.8rem; 
    }
    @media screen and (max-width: 780px) {
        font-size: 2.5rem; 
    }
`;

export const LearnMoreButton = styled.button`
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

export const Intro = styled.section`
    width: 100%;
    padding: 0 7rem;

    @media screen and (max-width: 1070px) {
            padding: 0 3rem;
          
    }

    @media screen and (max-width: 660px) {
            padding: 0 1rem;     
    }

    @media screen and (max-width: 660px) {
            padding: 0;     
    }
`;

export const BackgroundAnimationArea = styled.div`  
    width: 50%;
    maxHeight: 200px;
    position: absolute;
    top: 0px;
    right: 20px;

    @media screen and (max-width: 1166px) {
        top: 30px;
    }

    @media screen and (max-width: 900px) {
        top: 80px;
        width: 60%;
    }
    @media screen and (max-width: 690px) {
        top: 120px;
        right: 10px;
        width: 70%;
    }
    @media screen and (max-width: 500px) {
        top: 120px;
        right: 10px;
        width: 80%;
    }
    @media screen and (max-width: 350px) {
        top: 100px;
        right: 0px;
        width: 100%;
    }
`;