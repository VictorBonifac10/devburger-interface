import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 4px;
`

export const Button = styled(Link)`
    text-decoration: none;
    color: #9758a6;
    cursor: pointer;
    border-bottom: 3px solid #9758a6
`

