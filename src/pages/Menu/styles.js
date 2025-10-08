import styled from "styled-components";
import BannerHamburger from '../../assets/banner-hamburguer.jpg'

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f0f0f0;
`

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    width: 100%;
    position: relative;

    background: linear-gradient(rgba(0, 0, 0, 0.72),rgba(48, 25, 73, 0.45)), url('${BannerHamburger}') no-repeat;
    background-position: center;
    background-size: cover;

    h1{
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        line-height: 65px;
        position: absolute;
        color: #fff;

        right: 20%;
        top: 20%;

        span{
            display: block;
            color: #fff;
            font-size: 16px;
        }
    }
`

export const CategoryMenu = styled.div``

export const ProductsContainer = styled.div``