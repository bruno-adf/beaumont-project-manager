import styled from "styled-components";

export const Background = styled.div`
    top: 0;
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-color: #00000050;
`
export const Container = styled.div`
    position: relative;
    top: 30%;
    left: 30%;

    width: 450px;
    height: fit-content;
    padding: 25px;

    background-color: white;
    border-radius: 5px;

    display: flexbox;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px 5px;

    h1{
        margin-right: 170px;
        margin-bottom: 10px;
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
        font-weight: bold;
    }
`

export const Info = styled.div`
    ${props => props.big && `
        width: 440px;
    `}
    ${props => props.small && `
        input{
            width: 210px;
        }
    `}
    .title{
        font-family: 'Inter', sans-serif;
        font-size: 0.8rem;
        font-weight: 600;
    }
    .input{
        border-radius: 5px;
        border-width: 1px;
        border-color: #909090;
        background-color: #F9FBFF;
        height: 25px;
        padding-left: 5px;
    }
`

export const Confirm = styled.button`
    margin-top: 12px;
    width: 218px;
    height: 30px;
    border-radius: 5px;
    border: none;
    background-color: #003117;
    color: white;
    text-align: center;
    :hover{cursor: pointer; }
`

export const Cancel = styled.p`
    font-family: 'Inter', sans-serif;
    color: #003117;
    :hover{
        cursor: pointer;
    }
`