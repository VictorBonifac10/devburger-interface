import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    .carousel-item{
        padding: 40px;
    }

    .react-multiple-carousel__arrow--left{
        top: 60px;
    }

    .react-multiple-carousel__arrow--right{
        top: 60px;
    }
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: #9758a6;
    padding: 20px 0px 12px 0px;
    position: relative;
    text-align: center;
    margin: 0px 0px 40px 0px;

    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        width: 56px;
        height: 4px;
        background-color: #9758a6;
        left: calc(50% - 28px);
    }
`;

export const ContainerItems = styled.div`

    background: linear-gradient(rgba(48, 48, 48, 0),rgba(103, 66, 143, 0.57)), url('${(props) => props.imageUrl}');
    background-position: center;
    background-size: cover;
    border-radius: 20px;

    display: flex;
    align-items: center;
    padding: 20px 10px;
    width: 100%;
    height: 250px;
`;

export const CategoryButton = styled(Link)`
    color: #fff;
    background-color:  rgba(0,0,0,0.5);
    padding: 10px 15px;
    border-radius:  30px;
    font-size: 18px;
    font-weight: 500;
    margin-top: 50px;
    text-decoration: none;

    &:hover{
        background-color: #9658a6c9;
    }
`;