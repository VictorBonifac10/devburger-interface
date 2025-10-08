import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
    border-radius: 8px;
    width: 100%;
    background-color: #fff;
    cursor: grab;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

    div{
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        p{
            font-size: 16px;
            color: #ff8c05;
            line-height: 20px;
            font-weight: 700;
            margin-top: 40px;
        }

        strong{
            margin-top: 10px;
            font-size: 18px;
            color: #363636;
            font-weight: 800;
            line-height: 20px;

        }
    }
`

export const CardImage = styled.img`
    height: 100px;
    position: absolute;
    top: -20px;

`