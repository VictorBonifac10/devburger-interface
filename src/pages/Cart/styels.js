import styled from "styled-components";

import Background from '../../assets/background-two.png'
import Texture from '../../assets/background-one.jpg'

export const Container = styled.div`
    width: 100%;
    background-color: ${props => props.theme.secondWhite};
    background: linear-gradient(rgba(255, 255, 255, 0.92),rgba(255,255,255,0.92)), url('${Background}');
    background-size: cover;
    background-position: center;
    min-height: 100vh;
`;

export const Banner = styled.div`
    background: url('${Texture}');
    background-color: ${props => props.theme.mainBlack};
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    height: 180px;

    img{
        height: 150px;
    }
`;

export const Title = styled.div`
    font-size: 32px;
    font-weight: 800;
    padding-bottom: 8px;
    color: ${props => props.theme.gren};
    text-align: center;
    position: relative;
    margin-top: 20px;

    &::after{
        position: absolute;
        left: calc(50% + -28px);
        bottom: 0;
        content: '';
        width: 56px;
        height: 4px;
        background-color: ${props => props.theme.gren};
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 30%;
    gap: 40px;
    width: 100%;
    max-width: 1280px;
    padding: 40px;
    margin: 0 auto;
`;
