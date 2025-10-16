import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 4px;
`

export const Button = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.purple};
    cursor: pointer;
    border-bottom: 3px solid ${props => props.theme.purple};
    margin-bottom: 40px;
`

