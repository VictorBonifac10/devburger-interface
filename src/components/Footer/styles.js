import styled from "styled-components";

export const ContainerFooter = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.purple};

    p{
        color: ${props => props.theme.white};
        padding: 20px;
        margin: 0;
    }
`