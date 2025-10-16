import styled from "styled-components";
import BannerHome from "../../assets/banner.jpg"
import Background from "../../assets/background-two.png"

export const Main = styled.main`
    background: linear-gradient(rgba(255, 255, 255, 0.92),rgba(255,255,255,0.92)), url('${Background}');
    background-size: cover;
`

export const Banner = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.72),rgba(48, 25, 73, 0.45)), url('${BannerHome}');
    background-size: cover;
    background-position: center;
    height: 400px;

    h1{
        font-family: ${props => props.theme.roadRageFont};
        font-size: 80px;
        color: ${props => props.theme.darkWhite};
        position: absolute;
        right: 20%;
        top: 30%;

        span{
            display: block;
            color: ${props => props.theme.white};
            font-size: 16px;
        }
    }
`

export const Container = styled.section`

`