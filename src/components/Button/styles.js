import styled from "styled-components";

export const ContainerButton = styled.button`
    width: 100%;
    height: 52px;
    border: 0;
    border-radius: 50px;
    background-color: ${props => props.theme.purple};
    font-family: ${props => props.theme.roadRageFont};
    font-size: 30px;
    color: ${props => props.theme.white};

    &:hover{
        background-color: #6f3576;
        border-radius: 50px;
    }
`