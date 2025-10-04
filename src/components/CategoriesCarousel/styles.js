import styled from "styled-components";

export const Container = styled.div`
    .carousel-item{
        padding-right: 30px;
    }

    padding-left: 30px;
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: #9758a6;
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin: 40px 0px;

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
    background: url('${(props) => props.imageUrl}');
    background-position: center;
    background-size: cover;
    border-radius: 20px;

    display: flex;
    align-items: center;
    padding: 20px 10px;
    width: 100%;
    height: 250px;

    p{
        color: #fff;
        background-color:  rgba(0,0,0,0.5);
        padding: 10px;
        border-radius:  30px;
        font-size: 20px;
        font-weight: 800;
        margin-top: 150px;
    }
`;