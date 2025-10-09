import styled from "styled-components";
import BannerHamburger from '../../assets/banner-hamburguer.jpg'
import Background from "../../assets/background-two.png"
import { Link } from "react-router-dom";

export const Container = styled.div`
    background: linear-gradient(rgba(255, 255, 255, 0.92),rgba(255,255,255,0.92)), url('${Background}');
    background-size: cover;
    background-position: center;
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

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
`

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${props => (props.$isActiveCategory ? '#9758a6' : '#9a9a9d')};
    font-size: 18px;
    font-weight: 500;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${props => props.$isActiveCategory && '3px solid #9758a6'};
`

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    justify-content: center;
    max-width: 1280px;
    gap: 60px;
    margin: 50px auto 0;
`