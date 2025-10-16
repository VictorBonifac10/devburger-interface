import styled from "styled-components";

export const Container = styled.div`
    .carousel-item{
        padding: 40px;
    }

    overflow-x: hidden;
    
    .react-multi-carousel-list{
        overflow: visible;
    }

    .react-multiple-carousel__arrow--left{
        top: 50px;
    }
    
    .react-multiple-carousel__arrow--right{
        top: 50px;
    }

`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: ${props => props.theme.gren};
    padding: 20px 0px;
    position: relative;
    text-align: center;
    margin: 40px 0px 90px 0px;

    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        width: 56px;
        height: 4px;
        background-color: ${props => props.theme.gren};
        left: calc(50% - 28px);
    }
`;