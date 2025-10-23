import styled from "styled-components";

export const Container = styled.div``;

export const ProductImage = styled.img`
    height: 80px;
    padding: 12px;
    border-radius: 16px;
`;

export const EditButton = styled.button`
    border: 0;
    background-color: ${(props) => props.theme.darkWhite};
    height: 32px;
    width: 32px;
    border-radius: 8px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;

    i{
        color: #4a4a4aff;
    }

    &:hover{
        background-color: ${(props) => props.theme.purple};

        i{
            color: ${(props) => props.theme.white};
        }
    }
`;

export const Icon = styled.div`

    .ri-checkbox-circle-line{
        font-size: 22px;
        color: #61A120;
    } 


    .ri-close-circle-line{
        font-size: 22px;
        color: #FF3205;
    } 

`