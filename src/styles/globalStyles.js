import styled, { css } from "styled-components";

//Global Components
export const Body = styled.main`
    width: 100%;
    background: #000111;
    color: white;
    margin: 0;
    padding: 0;
`;

export const Section = styled.section`
    width: 100%;
    padding: ${props => props.padding ? props.padding : '2rem 4rem'};

    
    @media screen and (max-width: 1180px) {
        padding: 2rem;
    }

    @media screen and (max-width: 630px) {
        padding: 1rem;
    }

    @media screen and (max-width: 400px) {
        padding: 1rem 12px;
    }
`;

export const Spacer = styled.div`
    width: 100%;
    height: ${props => props.space ? props.space : 25}px;
`;

export const Container = styled.div`
    width: ${props => props.width ? props.width : '100%'};
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.justify ? props.justify : 'flex-start'};
    padding: ${props => props.padding ? props.padding : '0'};
    margin: ${props => props.margin ? props.margin : '0'};

    ${props => props.responsive && css`
        @media screen and (max-width: ${props.responsive.At}px) {
            flex-direction: column;
            justify-content: center;
            align-items: ${props.responsive?.align ? props.responsive?.align : 'center'};
        }
    `}
`;

export const Box = styled.div`
    width: ${props => props.width ? props.width : '100%'};
    display: flex;
    flex-direction: column;
    align-items: ${props => props.align ? props.align : 'flex-start'};
    justify-content: ${props => props.justify ? props.justify : 'flex-start'};
    padding: ${props => props.padding ? props.padding : '0'};
    margin: ${props => props.margin ? props.margin : '0'};

    @media screen and (max-width: 540px){
        width: 100%;
        justify-content: center;
        padding: 1rem 10px;
    }
`;

export const ContentHolder = styled.div`
    display: flex;
    flex-direction: ${props => props.row ? 'row' : 'column'};
    padding: 1rem;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;

    ${props => props.responsiveAt && css`
        @media screen and (max-width: ${props.responsiveAt}px) {
            width: 100%;
        }
    `}

    @media screen and (max-width: 540px){
        flex-direction: column;
        justify-content: center;
    }
`;

export const EmptyBox = styled.div`
    min-height: 100%;
    width: ${props => props.width ? props.width : '100%'};
    padding: ${props => props.padding ? props.padding : '0'};
    margin: ${props => props.margin ? props.margin : '0'};
`;

export const SectionDivider = styled.div`
    height: 8px;
    width: 150px;
    border-radius: 50px;
    background: radial-gradient(circle at 13% 38%, rgba(134, 2, 135, 1) 0%, rgba(110, 135, 3, 1) 50%, rgba(12, 0, 111, 1) 100%);
    margin: 20px 0px;
`;

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    color: white;
    margin:0;
    padding: 0;
    text-transform: capitalize;

    @media screen and (max-width: 350px) {
        font-size: 2rem;
    }
`;

export const LineDivider = styled.div`
    width: 85%;
    margin: 1rem auto;
    border: none;
    border-top: 1px solid blue;
`;

export const Footer = styled.footer`
    padding: 1rem;
    text-align: center;
    color: yellow;
    padding-bottom: 2rem;
    font-size: 1.2rem;
`;