import styled from "styled-components";

export const ProductImage = styled.img`
    height: 80px;
    width: 90px;
    border-radius: 16px;
`;

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 30px;
        color: #fff;
        border-radius: 4px;
        background-color: #9758a6;
        transition: all 0.4s;
        border: none;


        &:hover{
            background-color: #6f357c;
        }

    }
`;

export const EmptyCart = styled.p`

    color: #757575;
    font-size: 17px;
    padding: 10px;
`;

export const ProductTotalPrice = styled.p`
    color: #484848;
    font-weight: bold;
`;

export const TrashIcon = styled.button`

    border: none;
    background-color: transparent;
    cursor: pointer;

    i{
        font-size: 20px;
        color: #757575ff;

    &:hover{
        color: #b24747ff;
    }
    }
`