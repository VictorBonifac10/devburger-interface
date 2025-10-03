import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";
import BackgroundOne from '../../assets/background-one.jpg';
import BackgroundTwo from '../../assets/background-two.png';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`;

export const LeftContainer = styled.div`
    background: url('${BackgroundOne}');
    background-size: cover;
    background-position: center;
    
    height: 100%;
    width: 100%;
    max-width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 55%;
    }
`;

export const RightContainer = styled.div`
    background: url('${BackgroundTwo}');
    background-color: #4e4e4eff;
    background-size: cover;
    background-position: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;
    width: 100%;
    max-width: 50%;
`;

export const Title = styled.h2`
    font-family: "Road Rage", sans-serif;
    font-size: 35px;
    color: #9758a6;
    display: block;
    margin: 0 auto;
    text-align: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 25px;
    width: 100%;
    max-width: 400px;

    background-color: #ffffff76;
    border-radius: 10px;

        p{
        color: #fff;
        font-size: 15px;

        a{
            text-decoration: underline;
        }
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    input{
        width: 100%;
        border: none;
        height: 52px;
        border-radius: 50px;
        padding: 0 16px;
    }

    label{
        font-size: 15px;
        color: #9758a6;
    }

    p{
        font-size: 12px;
        line-height: 80%;
        color: #cf3057;
        height: 10px;
    }
`;

export const Link = styled(ReactLink)`
    text-decoration: none;
    color: #fff;
`;