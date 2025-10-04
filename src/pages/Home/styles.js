import styled from "styled-components";
import BannerHome from "../../assets/banner.jpg"
import Background from "../../assets/background-two.png"

export const Banner = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.72),rgba(48, 25, 73, 0.45)), url('${BannerHome}');
    background-size: cover;
    background-position: center;
    height: 280px;

    h1{
        font-family: 'Road Rage', sans-serif;
        font-size: 70px;
        color: #f4f4f4;
        position: absolute;
        right: 20%;
        top: 10%;
    }
`

export const Container = styled.section`
    background: linear-gradient(rgba(255, 255, 255, 0.92),rgba(255,255,255,0.92)), url('${Background}');
    background-size: cover;
    height: 500px;
`

export const Content = styled.div``